import db from "../db.js";

export async function getProducts(req, res) {
  try {  
    let productsQuery = [];
    const categoryFilter = req.query.cat;
    console.log(categoryFilter);

    if (!categoryFilter) {
      productsQuery = await db.collection("products").find({}).toArray();
    }
    productsQuery = await db.collection("products").find({category: categoryFilter}).toArray();
    
    res.status(200).send(productsQuery);
    return;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
    return;
  }
}