// src/server/trpc/routers/hello.ts
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const helloRouter = t.router({
  hello: t.procedure.query(() => {
    return { greeting: "Hello from tRPC!" };
  }),
});
