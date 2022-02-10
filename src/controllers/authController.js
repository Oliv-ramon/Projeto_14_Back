import db from "../db.js";
import { v4 as uuid } from "uuid";

export async function signIn(req, res) {
  const user = res.locals.user;

  const token = uuid(10);

  db.collection("sessions").insertOne(
    {
      user: user._id,
      token
    }
  );
  
  res.status(200).send({ userName: user.name, token });
}