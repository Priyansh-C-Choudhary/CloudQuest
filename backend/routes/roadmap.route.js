import express from "express";
import { getRoadmap, saveRoadmap } from "../controllers/roadmap.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { authorizeRoles } from "../middleware/authorizeRoles.js";

const router = express.Router();

// Fetch roadmap content (accessible to all users)
router.get("/:tool", verifyToken, getRoadmap);

// Save roadmap content (restricted to collaborators)
router.post("/:tool", verifyToken, authorizeRoles("collaborator"), saveRoadmap);

export default router;
