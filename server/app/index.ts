import Koa from "koa";
import dotenv from "dotenv";
import { HTTP_PORT } from "@config/server";
import { createServer } from "@utils/server";
import { sockets } from "@app/controller/sockets";
import { api } from "@app/controller/api";

dotenv.config();

const bootstrap = async () => {
  const app = new Koa();
  app.use(api.routes()).use(api.allowedMethods()).use(sockets());

  createServer(app).listen(HTTP_PORT);
};

bootstrap();
