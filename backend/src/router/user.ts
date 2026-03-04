import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
} from "../controller/userController";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

export default router;
