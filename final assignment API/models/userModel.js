const mongoose = require("mongoose");

// Define User schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  lastPasswordChange: {
    type: Date,
    default: Date.now,
  },
  passwordHistory: [
    {
      password: {
        type: String,
        required: true,
      },
      changedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  loginAttempts: {
    type: Number,
    default: 0,
  },
  lockUntil: {
    type: Number,
    default: 0,
  },
  // image: {
  //   type: String,
  //   default: null,
  // },
  likedPets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LikedPet",
    },
  ],
  adoptionForms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Adoption",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
