import express, { Request, Response, NextFunction } from "express";
import { auth } from "./routes/auth";
import { data } from "./routes/data";
import cors from "cors";
import { authGuard } from "@middlewares/auth";

const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Hello World!");
  next();
});

app.use("/auth", authGuard, auth);
app.use("/data", authGuard, data);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
