import express from "express";
import { protectRoute } from "../Middleware/auth.middleware.js";
import { getUsersForSidebar } from "../Controllers/message.controller.js";

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);

export default router;
