import { Router } from "express";
import {
  getUser,
  deleteUser,
  createUser,
  updateUserById,
} from "../controllers/scholarshipInfo.controllers";

export const router = Router();

// Post
router.get("/", createUser);
// Get user by ID
router.get("/:id", getUser);
// Update
router.put("/:id", updateUserById);
// Delete
router.delete("/:id", deleteUser);

export default router;
