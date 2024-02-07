import asyncHandler from "../middlewares/asyncHandler.js";
import userModal from "../models/userModel.js";

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("User register");
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.send("User Logged in");
});

// @desc  Get user profile
// @route Get /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @desc  Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// @desc  Get all user
// @route Get /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get all users");
});

// @desc  Get  user by id
// @route Get /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get user by id");
});

// @desc  update  user by id
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("User updated");
});
// @desc  Delete  user by id
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("User deleted");
});

export {
  registerUser,
  authUser,
  updateUser,
  getUserProfile,
  getUsers,
  getUserById,
  updateUserProfile,
  deleteUser,
};
