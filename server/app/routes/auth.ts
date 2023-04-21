import express from "express";
const auth = express.Router();

auth.post("/login", (req, res, next) => {
  res.send({
    message: "login successfully",
  });
});

export { auth };
