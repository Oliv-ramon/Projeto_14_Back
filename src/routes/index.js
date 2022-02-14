import { Router } from "express";
import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";
import purchaseRouter from "./purchaseRouter.js";

const route = Router();
route.use(authRouter);
route.use(cartRouter);
route.use(purchaseRouter);

export default route;