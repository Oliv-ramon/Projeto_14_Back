import { Router } from "express";
import { savePurchase } from "../controllers/purchaseController.js";
import { tokenValidation, cartItemsValidation as purchaseItemsValidation } from "../middlewares/index.js";

const purchaseRouter = Router();

purchaseRouter.use(tokenValidation);
purchaseRouter.post("/purchase", purchaseItemsValidation, savePurchase);

export default purchaseRouter;