import db from "../db.js";

export async function sendCart(req, res) {
  const userId = res.locals.userId;

  try {
    const cartDocument = await db.collection("carts").findOne({ userId });

    if (cartDocument) {
      return res.status(200).send(cartDocument.cart);
    }

    await db.collection("carts").insertOne({
      userId,
      cart: [],
    });

    return res.status(200).send([]);
  } catch (error) {
    console.log(error)
    return res.sendStatus(500);
  }
}

export async function updateCart(req, res) {
  const userId = res.locals.userId;
  const cart = req.body;

  try {
    await db.collection("carts").updateOne({ userId }, { $set: { cart } }
    );
  } catch {
    return res.sendStatus(500);
  }
  
  res.sendStatus(204);
}

export async function cleanCart(req, res) {
  const userId = res.locals.userId;

  try {
    await db.collection("carts").updateOne({ userId }, { 
      $set: { cart: [] }});
    
    return res.status(204).send([]);
  } catch(error) {
    console.log(error)
    return res.sendStatus(500);
  }
}