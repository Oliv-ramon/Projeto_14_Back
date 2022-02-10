import { Router } from "express";
import { signIn } from "../controllers/authController";


const authRouter = Router();

authRouter.post("/auth/sign-in", signIn);

export default authRouter;