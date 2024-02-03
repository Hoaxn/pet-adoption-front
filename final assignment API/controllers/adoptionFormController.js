const Pet = require("../models/petModel");
const Adoption = require("../models/adoptionFormModel");
const { default: mongoose } = require("mongoose");

// Save adoption form data
exports.saveAdoptionForm = async (req, res) => {
  try {
    const { fullName, email, phone, address, petId, userId } = req.body;

    // Check if the pet exists
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }

    // // Check if the liked pet already exists
    // const pet = await Pet.findOne({
    //   user: userId,
    //   pet: petId,
    // });

    // Save the adoption form data
    const adoption = new Adoption({
      fullName,
      email,
      phone,
      address,
      pet: petId,
      user: userId,
    });

    await adoption.save();

    res.status(201).json({ message: "Adoption form saved successfully" });
  } catch (error) {
    console.error("Error saving adoption form:", error);
    res.status(500).json({ message: "Error saving adoption form" });
  }
};

// Get all adoption forms
exports.getAdoptionFormsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Retrieve all adoption forms
    const adoptions = await Adoption.find({ user: userId });

    res.json({ adoptions });
  } catch (error) {
    console.error("Error retrieving adoptions:", error);
    res.status(500).json({ message: "Error retrieving adoptions" });
  }
};

// Delete an adoption form
exports.deleteAdoptionForm = async (req, res) => {
  const { userId, petId } = req.params;

  try {
    // const { id, userId, petId } = req.params;

    // Check if petId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(petId)) {
      return res.status(400).json({ message: "Invalid petId" });
    }
    // Find the adoption form by ID and delete it
    const adoption = await Adoption.findOneAndRemove({
      user: new mongoose.Types.ObjectId(userId),
      pet: new mongoose.Types.ObjectId(petId),
    });

    // Check if the adoption form exists
    if (!adoption) {
      return res.status(404).json({ message: "Adoption form not found" });
    }

    res.status(200).json({ message: "Adoption form deleted successfully" });
  } catch (error) {
    console.error("Error deleting adoption form:", error);
    res.status(500).json({ message: "Error deleting adoption form" });
  }
};
