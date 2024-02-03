// routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");
const authenticateToken = require("../middlewares/authMiddleware");
const {
  registerUserValidator,
  loginUserValidator,
} = require("../validators/authValidator");
const upload = require("../services/multer_config");

const router = express.Router();

// Register endpoint
router.post(
  "/auth/register",
  // upload.single("image"),
  registerUserValidator,
  authController.registerUser
);

// Login endpoint
router.post("/auth/login", loginUserValidator, authController.loginUser);

// Change Password endpoint
router.post("/auth/change-password/:id", authController.changePassword);

// Get all users
router.get("/auth/users", authController.getAllUsers);

// Delete a user by ID
router.delete("/auth/users/:id", authController.deleteUser);

// Update a user by ID
router.put("/auth/users/:id", authController.updateUser);

module.exports = router;
