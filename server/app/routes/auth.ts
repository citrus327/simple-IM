import express from "express";
const auth = express.Router();

auth.get("/user", (req, res, next) => {
  res.send({
    message: "login successfully",
  });
  next();
});

export { auth };
