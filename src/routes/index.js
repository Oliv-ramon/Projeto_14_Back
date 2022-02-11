import { Router } from "express";
import authRouter from "./authRouter.js";
import productsRouter from "./productsRouter.js";

const route = Router();
route.use(authRouter);
route.use(productsRouter);

export default route;