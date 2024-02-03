const mongoose = require("mongoose");

// Define Pet schema
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  likedByUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LikedPet",
    },
  ],
  usersAdoptionForm: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Adoption",
    },
  ],
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
