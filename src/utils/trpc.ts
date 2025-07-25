// src/utils/trpc.ts
"use client";

import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@/server/trpc/routers";

export const trpc = createTRPCReact<AppRouter>();
