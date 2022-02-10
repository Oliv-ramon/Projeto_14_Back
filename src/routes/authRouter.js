import { Router } from "express";
import { signIn } from "../controllers/authController.js";
import { loginValidation } from "../middlewares/index.js";

const authRouter = Router();

authRouter.post("/auth/sign-in", loginValidation, signIn);

export default authRouter;