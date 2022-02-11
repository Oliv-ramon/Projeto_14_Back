import { all } from "express/lib/application";
import db from "../db.js";

export async function getProducts(req, res) {
  console.log(db, '<<<< !!!');
  try {
    const allProducts = db.collection("products").find({}).toArray();
    return res.status(200).send(allProducts);
  } catch {
    return res.sendStatus(500);
  }
}