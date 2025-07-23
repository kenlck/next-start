// src/server/trpc/routers/hello.ts
import { publicProcedure, protectedProcedure } from "../procedures";

export const helloRouter = {
  hello: publicProcedure.query(() => {
    return { greeting: "Hello from tRPC!" };
  }),
  secret: protectedProcedure.query(({ ctx }) => {
    return { secret: `Authenticated as ${ctx.user?.email ?? ctx.user?.id}` };
  }),
};
