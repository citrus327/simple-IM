import type { Middleware } from "koa";

export const authGuard: Middleware = async (ctx, next) => {
  if (!ctx.session?.user) {
    ctx.body = "Unauthorized";
    ctx.status = 401;
  }
  await next();
};
