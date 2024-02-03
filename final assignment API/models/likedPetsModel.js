const mongoose = require("mongoose");

// Define LikedPet schema
const likedPetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet",
    required: true,
  },
});

const LikedPet = mongoose.model("LikedPet", likedPetSchema);

module.exports = LikedPet;
