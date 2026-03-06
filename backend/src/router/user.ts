import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById
} from "../controller/userController";
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUserById);

export default router;
