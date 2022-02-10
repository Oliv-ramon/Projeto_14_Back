import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { loginValidation, userValidation } from "../middlewares/index.js";

const authRouter = Router();

authRouter.post("/auth/sign-up", userValidation, signUp);
authRouter.post("/auth/sign-in", loginValidation, signIn);

export default authRouter;