const express = require("express");
const petController = require("../controllers/petController");
const upload = require("../services/multer_config");

const router = express.Router();

// POST /pets - Create a new pet
router.post("/pets", upload.single("image"), petController.createPet);

// PUT /pets/:id - Update a pet
router.put("/pets/:id", petController.updatePet);

// DELETE /pets/:id - Delete a pet
router.delete("/pets/:id", petController.deletePet);

// GET /pets - Fetch all pets
router.get("/pets", petController.getAllPets);

// GET /pets/:id - Fetch a single pet by ID
router.get("/pets/:id", petController.getPetById);

module.exports = router;
