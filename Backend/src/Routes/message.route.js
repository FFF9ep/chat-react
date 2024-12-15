import express from "express";
import { protectRoute } from "../Middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar } from "../Controllers/message.controller.js";

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);

export default router;
