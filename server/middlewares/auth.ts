import { Middleware } from "./types";
import { getAuthingClient } from "../vendor/authing";

export const authGuard: Middleware = async (req, res, next) => {
  const accessToken = req.get("authorization")?.split("Bearer ")?.[1];
  const result = await getAuthingClient().introspectToken(accessToken!);

  if (result.active) {
    next();
  } else {
    res.status(401).end();
  }
};
