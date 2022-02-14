import { cartItemSchema } from "../schemas/index.js";

export default async function cartItemValidation(req, res, next) {
  const cart = req.body;

  const itemsDontMatchSchema = cart.some(i => {
    const { error } = cartItemSchema.validate(i);

    return !error;
  });

  if (itemsDontMatchSchema) {
    return res.sendStatus(422);
  }

  next();
}