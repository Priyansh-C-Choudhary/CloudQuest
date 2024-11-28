import express from "express";
import {
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";



const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.get('/collaborator-route', verifyToken, authorizeRoles('collaborator'), (req, res) => {
	res.status(200).json({ message: "Welcome, Collaborator!" });
  });
  
  router.get('/user-route', verifyToken, authorizeRoles('user', 'collaborator'), (req, res) => {
	res.status(200).json({ message: "Welcome, User!" });
  });

export default router;
