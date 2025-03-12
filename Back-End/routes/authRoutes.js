import express from "express";
const router = express.Router();
import { signup, login, forgotPassword } from "../controllers/authController.js"; // Ensure to add .js extension

// Signup Route
router.post("/signup", signup);

// Login Route
router.post("/login", login);

// Forgot Password Route
router.post("/forgot-password", forgotPassword);

export default router; // Use export default to allow default import