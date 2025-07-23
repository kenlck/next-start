// src/server/trpc/procedures.ts
import { initTRPC, TRPCError } from "@trpc/server";

type Context = {
  user: {
    id: string;
    email?: string | null;
    name?: string | null;
    [key: string]: any;
  } | null;
};

const t = initTRPC.context<Context>().create();

const authMiddleware = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(authMiddleware);
