import { Router } from "express";
import authRouter from "./authRouter.js";

const route = Router();
route.use(authRouter);

export default route;