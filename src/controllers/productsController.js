import db from "../db.js";

export async function getProducts(req, res) {
  try {
    const allProducts = await db.collection("products").find({}).toArray();
    res.status(200).send(allProducts);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}