import Koa, { Middleware } from "koa";
import dotenv from "dotenv";
import { HTTP_PORT } from "@config/server";
import { createServer } from "@utils/server";
import { sockets } from "@app/controller/sockets";
import { api } from "@app/controller/api";
import cors from "@koa/cors";
import session from "koa-session";
import bodyparser from "koa-bodyparser";

dotenv.config();

const log: Middleware = async (ctx, next) => {
  console.log(ctx.path, "in coming");
  await next();
};

const bootstrap = async () => {
  const app = new Koa();
  app.keys = ["some secret hurr"];

  app
    .use(log)
    .use(bodyparser())
    .use(session({}, app))
    .use(
      cors({
        origin: "https://127.0.0.1:5173",
      })
    )
    .use(api.routes())
    .use(api.allowedMethods())
    .use(sockets());

  createServer(app).listen(HTTP_PORT);
};

bootstrap();
