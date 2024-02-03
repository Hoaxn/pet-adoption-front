const mongoose = require("mongoose");

// Define the OTP schema
const OtpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

// Create the OTP model
const OtpModel = mongoose.model("Otp", OtpSchema);

module.exports = OtpModel;
