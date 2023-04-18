import Router from "@koa/router";
import { authGuard } from "@middlewares/auth";
const api = new Router({
  prefix: "/api",
});

api
  .post("/login", (ctx) => {
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
  .post("/data", authGuard, (ctx) => {
    ctx.body = { data: "this is actual data" };
    ctx.status = 200;
    return;
  });

export { api };
