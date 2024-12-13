import express from "express";
import { signup, login, logout, updateProfile } from "../Controllers/auth.controller.js";
import { protectRoute } from "../Middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

export default router;
