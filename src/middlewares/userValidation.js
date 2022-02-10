import db from "../db.js"
import { userSchema } from "../schemas/index.js";

export default async function userValidation(req, res, next) {
  const user = req.body;
  
  const { error } = userSchema.validate(user);
  
  if (error) {
    const errors = error.details.map(({message}) => message).join(", ");
    
    const errorMessage = `Errors: ${errors}`
    
    return res.status(422).send(errorMessage);
  }
  
  try {
    const userAlredyExist = await db.collection("users").findOne({ email: user.email });
    console.log(userAlredyExist)
    console.log(userAlredyExist)
  
    if (userAlredyExist) {
      return res.sendStatus(409);
    }
  } catch {
    return res.sendStatus(500);
  }

  next();
}