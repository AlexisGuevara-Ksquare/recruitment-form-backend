import { Router } from "express";
import {
  createUser,
  getUser,
  updateUserById,
} from "../controllers/academicInfo.controller";
import { deleteUser } from "../controllers/academicInfo.controller";

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
