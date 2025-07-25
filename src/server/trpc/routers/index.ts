// src/server/trpc/routers/index.ts
import { initTRPC } from "@trpc/server";
import { authRouter } from "./auth";

const t = initTRPC.create();

export const appRouter = t.router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
