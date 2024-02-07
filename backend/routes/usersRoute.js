import express from "express";
const router = express.Router();
import {
  registerUser,
  authUser,
  updateUser,
  getUserProfile,
  getUsers,
  getUserById,
  updateUserProfile,
  deleteUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
