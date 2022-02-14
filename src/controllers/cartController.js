import db from "../db.js";

export async function saveCart(req, res) {
  const cart = req.body;
  const userId = res.locals.userId;

  try {
    db.collection("carts").insertOne(
      {
        userId,
        ...cart,
      }
    );
  } catch {
    return res.sendStatus(500);
  }
  
  res.sendStatus(201);
}