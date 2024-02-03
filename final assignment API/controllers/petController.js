const { validationResult } = require("express-validator");
const Pet = require("../models/petModel");
const LikedPet = require("../models/likedPetsModel");

// Create a new pet
exports.createPet = async (req, res) => {
  try {
    const RequestBody = JSON.parse(req.body.Request);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const { name, age, species, breed, gender, description, color } =
      RequestBody;

    const request = {
      name,

      age,

      species,

      breed,

      gender,

      description,

      color,

      image: req.file?.filename,
    };

    console.log("request", request);

    // Validate the request body
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // // Create a new pet
    const pet = new Pet(request);

    // // Save the pet to the database
    await pet.save();

    res.status(201).json({ message: "Pet created successfully", pet });
  } catch (error) {
    console.error("Error creating pet:", error);
    res.status(500).json({ message: "Error creating pet" });
  }
};

// Update an existing pet
exports.updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, species, breed, gender, description, color, image } =
      req.body;

    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Find the pet by ID
    const pet = await Pet.findById(id);

    // Check if the pet exists
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // Update the pet
    pet.name = name;
    pet.age = age;
    pet.species = species;
    pet.breed = breed;
    pet.gender = gender;
    pet.description = description;
    pet.color = color;
    pet.image = image;

    // Save the updated pet to the database
    await pet.save();

    res.json({ message: "Pet updated successfully", pet });
  } catch (error) {
    console.error("Error updating pet:", error);
    res.status(500).json({ message: "Error updating pet" });
  }
};

// Delete a pet
exports.deletePet = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the pet by ID and delete it
    const pet = await Pet.findByIdAndDelete(id);

    // Check if the pet exists
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.json({ message: "Pet deleted successfully" });
  } catch (error) {
    console.error("Error deleting pet:", error);
    res.status(500).json({ message: "Error deleting pet" });
  }
};

// Get all pets
exports.getAllPets = async (req, res) => {
  try {
    // Find all pets
    const pets = await Pet.find();

    res.json({ pets });
  } catch (error) {
    console.error("Error retrieving pets:", error);
    res.status(500).json({ message: "Error retrieving pets" });
  }
};

// // Get a pet by ID
// exports.getPetById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find the pet by ID
//     const pet = await Pet.findById(id);

//     // Check if the pet exists
//     if (!pet) {
//       return res.status(404).json({ message: "Pet not found" });
//     }

//     res.json({ pet });
//   } catch (error) {
//     console.error("Error retrieving pet:", error);
//     res.status(500).json({ message: "Error retrieving pet" });
//   }
// };

// Get a pet by ID
exports.getPetById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the pet by ID and populate the 'likedByUsers' field
    const pet = await Pet.findById(id).populate({
      path: "likedByUsers",
      populate: {
        path: "user",
        model: "User",
      },
    });

    // Check if the pet exists
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.json({ pet });
  } catch (error) {
    console.error("Error retrieving pet:", error);
    res.status(500).json({ message: "Error retrieving pet" });
  }
};
