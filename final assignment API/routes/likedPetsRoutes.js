const express = require("express");
const likedPetsController = require("../controllers/likedPetsController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

// POST /api/liked-pets - Save a Liked Pet
router.post("/liked-pets", authenticateToken, likedPetsController.saveLikedPet);

// GET /api/liked-pets/:userId - Fetch Liked Pets for a User
router.get(
  "/liked-pets/:userId",
  authenticateToken,
  likedPetsController.getLikedPetsByUserId
);

// DELETE /api/liked-pets/:userId/:petId - Remove a Liked Pet
router.delete(
  "/liked-pets/:userId/:petId",
  authenticateToken,
  likedPetsController.removeLikedPet
);

module.exports = router;
