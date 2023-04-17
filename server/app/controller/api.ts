import Router from "@koa/router";

const api = new Router({
  prefix: "/api",
});

api
  .get("/", (ctx) => {
    ctx.set("Content-Type", "text/html");
    ctx.body = "<div>this is a html segment from server</div>";
    ctx.status = 200;
    return;
  })
  .get("/data", (ctx) => {
    ctx.body = { userName: 123 };
    ctx.status = 200;
    return;
  });

export { api };
