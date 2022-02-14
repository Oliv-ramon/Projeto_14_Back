import { Router } from "express";
import { sendCart, updateCart, cleanCart } from "../controllers/cartController.js";
import { tokenValidation, cartItemsValidation } from "../middlewares/index.js";

const cartRouter = Router();

cartRouter.use(tokenValidation);
cartRouter.get("/cart", sendCart);
cartRouter.post("/cart", cartItemsValidation, updateCart);
cartRouter.delete("/cart", cleanCart);

export default cartRouter;