import Router from "@koa/router";
import { authGuard } from "@middlewares/auth";
const api = new Router({
  prefix: "/api",
});

api
  .post("/login", async (ctx, next) => {
    await next();

    ctx.status = 200;
    const user = {
      username: ctx.request.body?.username,
      password: ctx.request.body?.password,
      isLoggedIn: true,
    };
    ctx.body = user;
    ctx.session!.user = user;
  })
  .get("/", authGuard, (ctx) => {
    ctx.set("Content-Type", "text/html");
    ctx.body = "<div>this is a html segment from server</div>";
    ctx.status = 200;
  })
  .get("/data", authGuard, (ctx) => {
    console.log(ctx.session);
    ctx.body = { data: "this is protected data", session: ctx.session };
    ctx.status = 200;
    return;
  })
  .get("/data/public", (ctx) => {
    ctx.body = { data: "this is public data" };
    ctx.status = 200;
    return;
  });

export { api };
