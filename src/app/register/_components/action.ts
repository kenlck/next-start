"use server";

import { prisma } from "@/lib/db";
import { hash } from "bcryptjs";
import type { RegisterDetailsContextDTO } from "@/app/register/_components/hook";

export async function register(details: RegisterDetailsContextDTO) {
  console.log("Server: Sending register request for:", details.email);

  try {
    const { name, password } = details;
    const email = details.email?.trim().toLowerCase(); // Normalize email input
    // Validate required fields
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Please enter a valid email address");
    }

    // Validate password length
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("A user with this email already exists");
    }

    // Hash the password
    const hashedPassword = await hash(password, 12);

    // Create the user
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(), // normalize email to lowercase
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
    });

    return {
      success: true,
      message: "Account created successfully",
      user: user,
    };
  } catch (error) {
    console.error("Server: Register error:", error);
    return {
      success: false,
      message:
        typeof error === "string"
          ? error
          : error instanceof Error
          ? error.message
          : "An error occurred during registration",
    };
  }
}
