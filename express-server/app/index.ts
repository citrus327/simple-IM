import express from "express";
import { auth } from "./routes/auth";
import { data } from "./routes/data";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", auth);
app.use("/data", data);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
