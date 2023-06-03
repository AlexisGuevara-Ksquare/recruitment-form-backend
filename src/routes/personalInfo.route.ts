import { Router } from "express";
import {
  createUser,
  getUser,
  updateUserById,
} from "../controllers/personalInfo.controller";
import { deleteUser } from "../controllers/personalInfo.controller";

export const router = Router();

// Post
router.post("/", createUser);
// Get user by ID
router.get("/:id", getUser);
// Update
router.put("/:id", updateUserById);
// Delete
router.delete("/:id", deleteUser);

export default router;
