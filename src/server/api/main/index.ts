import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { templateRouter } from "./routers/template";
import { userRouter } from "./routers/user";

export const router = createTRPCRouter({
  template: templateRouter,
  user: userRouter,
});

export type Router = typeof router;
export const createCaller = createCallerFactory(router);
