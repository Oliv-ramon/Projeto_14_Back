import { Router } from "express";
import { saveCart } from "../controllers/cartController.js";
import { tokenValidation, cartItemsValidation } from "../middlewares/index.js";

const cartRouter = Router();

cartRouter.use(tokenValidation);
cartRouter.post("/cart", cartItemsValidation, saveCart);

export default cartRouter;