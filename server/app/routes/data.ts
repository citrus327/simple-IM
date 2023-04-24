import { authGuard } from "@middlewares/auth";
import express from "express";

const data = express.Router();

data.get("/public", (req, res, next) => {
  res.status(200).send({
    data: {
      message: "this is publicData",
    },
  });
  next();
});

data.get("/private", authGuard, (req, res, next) => {
  res.status(200).send({
    data: {
      message: "this is private data",
    },
  });
  next();
});

export { data };
