import db from "../db.js";

export async function savePurchase(req, res) {
  const purchase = req.body;
  const userId = res.locals.userId;

  try {
    db.collection("purchases").insertOne(
      {
        userId,
        ...purchase,
      }
    );
  } catch {
    return res.sendStatus(500);
  }
  
  res.sendStatus(201);
}