// src/server/trpc/routers/index.ts
import { initTRPC } from "@trpc/server";
import { helloRouter } from "./hello";

const t = initTRPC.create();

export const appRouter = t.router({
  hello: helloRouter,
});

export type AppRouter = typeof appRouter;
