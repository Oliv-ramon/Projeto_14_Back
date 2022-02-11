import express, { json } from "express";
import cors from "cors";
import route from "./routes/index.js";

const app = express();
app.use(json());
app.use(cors());
app.use(route);

app.listen(5000, () => {
  console.log("listening on port 5000");
});