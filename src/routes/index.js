import { Router } from "express";
import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";

const route = Router();
route.use(authRouter);
route.use(cartRouter);

export default route;