import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById
} from "../controller/userController";
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).delete(deleteUserById);

export default router;
