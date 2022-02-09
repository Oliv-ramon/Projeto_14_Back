import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

app.listen(5000, () => {
  console.log("listening on port 5000");
  console.log("testando_push_tarcísio");
});