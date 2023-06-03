import { Router } from "express";
import {
  deleteUserByUserName,
  getUserByUserName,
  updateUserByUserName,
} from "../controllers/user.controller";
import { createUser } from "../controllers/user.controller";

export const router = Router();

// Post
router.post("/", createUser);
// Get user by username
router.get("/:userName", getUserByUserName);
// Update user
router.put("/:userName", updateUserByUserName);
// Delete user
router.delete("/:userName", deleteUserByUserName);

export default router;
