const { default: mongoose } = require("mongoose");
const LikedPet = require("../models/likedPetsModel");

exports.saveLikedPet = async (req, res) => {
  try {
    const { userId, petId } = req.body;

    // Check if the liked pet already exists
    const existingLikedPet = await LikedPet.findOne({
      user: userId,
      pet: petId,
    });

    // if (existingLikedPet) {
    //   return res.status(400).json({ message: "Pet already liked" });
    // }
    if (existingLikedPet) {
      // If the pet is already liked, remove the like
      await LikedPet.findOneAndRemove({
        user: userId,
        pet: petId,
      });

      return res.status(200).json({ message: "Pet unliked successfully" });
    }

    // Create a new liked pet
    const likedPet = new LikedPet({
      user: userId,
      pet: petId,
    });

    // Save the liked pet to the database
    await likedPet.save();

    res.status(201).json({ message: "Pet liked successfully" });
  } catch (error) {
    console.error("Error saving liked pet:", error);
    res.status(500).json({ message: "Error saving liked pet" });
  }
};

// Fetch Liked Pets for a User
exports.getLikedPetsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch all liked pets for the user
    const likedPets = await LikedPet.find({ user: userId }).populate("pet");

    res.json({ likedPets });
  } catch (error) {
    console.error("Error fetching liked pets:", error);
    res.status(500).json({ message: "Error fetching liked pets" });
  }
};

// Remove a liked pet
exports.removeLikedPet = async (req, res) => {
  const { userId, petId } = req.params;

  try {
    // Find the liked pet by userId and petId
    const likedPet = await LikedPet.findOneAndRemove({
      user: new mongoose.Types.ObjectId(userId),
      pet: new mongoose.Types.ObjectId(petId),
    });

    // Check if the liked pet exists
    if (!likedPet) {
      return res.status(404).json({ message: "Liked pet not found" });
    }

    return res.json({ message: "Liked pet removed successfully" });
  } catch (error) {
    console.error("Error removing liked pet:", error);
    return res.status(500).json({ message: "Error removing liked pet" });
  }
};
