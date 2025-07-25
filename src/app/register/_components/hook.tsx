"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { trpc } from "@/utils/trpc";
import type { RegisterDetailsContextDTO } from "@/lib/types";

export function useRegisterForm() {
  const [details, setDetails] = useState<RegisterDetailsContextDTO>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  function resetInitialDetails() {
    setDetails({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  const { mutate, isPending } = trpc.auth.register.useMutation({
    onSuccess: async (data: { success: boolean; message: string }) => {
      if (data.success) {
        toast.success("Account created successfully");
        router.replace("/login");
      } else {
        toast.error(data.message ?? "Failed to create account");
      }
    },
    onError: (error) => {
      console.error("Register error:", error);
      toast.error("Failed to create account. Please try again.");
    },
  });

  return {
    details,
    setDetails,
    resetInitialDetails,
    mutate: (details: RegisterDetailsContextDTO) => mutate(details),
    isPending,
  };
}
