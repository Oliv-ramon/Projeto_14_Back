import db from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function signUp(req, res) {
  const user = req.body;
  delete user.passwordConfirm;

  const hashedPassword = bcrypt.hashSync(user.password, 10);

  console.log(db);

  try {
    db.collection("users").insertOne(
      {
        ...user,
        password: hashedPassword,
      }
    );
  } catch {
    return res.sendStatus(500);
  }
  
  res.sendStatus(201);
}

export async function signIn(req, res) {
  const user = res.locals.user;

  const token = uuid(10);

  try  {
    db.collection("sessions").insertOne(
      {
        userId: user._id,
        token
      }
    );
  } catch {
    return res.sendStatus(500);
  }
  
  res.status(200).send({ userName: user.name, token });
}