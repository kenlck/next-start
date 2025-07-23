"use client";

import { Toaster } from "@/components/ui/sonner";
import { TRPCProvider } from "./trpc-provider";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <TRPCProvider>
        {children}
        <Toaster richColors />
      </TRPCProvider>
    </SessionProvider>
  );
}
