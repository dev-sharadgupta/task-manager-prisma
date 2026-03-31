import express from "express";
import { signup, login, getUserProfile, logout } from "../controllers/auth.controller";
import { validateData } from "../../../middlewares/validation.middleware";
import { loginSchema, signupSchema } from "../schemas/auth.schema";
import { authenticateJWT } from "../../../middlewares/auth.middleware";

const router = express.Router();

router.post(
    "/signup",
    validateData(signupSchema),
    signup
);

router.post(
    "/login",
    validateData(loginSchema),
    login
);

router.get(
    "/me",
    authenticateJWT,
    getUserProfile
);

router.post(
    "/logout",
    logout
);

export default router;