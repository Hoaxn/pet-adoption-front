const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

// Create and configure the nodemailer transporter
const transporter = nodemailer.createTransport({
  // Configure your email provider settings here
  service: "gmail",
  auth: {
    user: "rockemu77@gmail.com",
    pass: "cjwqqspbqqwhaldu",
  },
});

module.exports = transporter;
