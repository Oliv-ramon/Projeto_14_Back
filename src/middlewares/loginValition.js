import db from "../db.js"
import bcrypt from "bcrypt";
import { loginSchema } from "../schemas/index.js";

export default async function loginValidation(req, res, next) {
  const login = req.body;

  const { error } = loginSchema.validate(login);

  if (error) {
    const errors = error.details.map(({message}) => message).join(", ");

    const errorMessage = `Errors: ${errors}`

    return res.status(422).send(errorMessage);
  }

  try {
    const user = await db.collection("users").findOne({ email: login.email });

    if (!user) {
      return res.sendStatus(401);
    }
  
    const wrongPassword = !bcrypt.compareSync(login.password, user.password);
    if (wrongPassword) {
      return res.sendStatus(401);
    }
  
    res.locals.user = user;
  } catch {
    res.sendStatus(500);
  }

  next();
}