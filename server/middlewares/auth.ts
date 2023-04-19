import type { Middleware } from "koa";

export const authGuard: Middleware = async (ctx, next) => {
  console.log(ctx);
  if (!ctx.session?.user) {
    ctx.body = "Unauthorized";
    ctx.status = 401;
    return;
  }
  await next();
};
