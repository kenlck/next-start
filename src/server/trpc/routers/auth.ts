import { initTRPC } from "@trpc/server";
import { prisma } from "@/lib/db";
import { hash } from "bcryptjs";
import { z } from "zod";
import type { RegisterDetailsContextDTO } from "@/lib/types";

const t = initTRPC.create();

const registerInput = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(6),
  confirmPassword: z.string(),
});

export const authRouter = t.router({
  register: t.procedure.input(registerInput).mutation(async ({ input }) => {
    const { name, email, password } = input;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (existingUser) {
      throw new Error("A user with this email already exists");
    }

    // Hash the password
    const hashedPassword = await hash(password, 12);

    // Create the user
    const user = await prisma.user.create({
      data: {
        email: email.trim().toLowerCase(),
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
      user,
    };
  }),
});
