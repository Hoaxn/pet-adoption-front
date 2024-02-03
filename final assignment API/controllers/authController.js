const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/userModel");

// Maximum number of allowed login attempts
const MAX_LOGIN_ATTEMPTS = 5;

// Lockout duration in milliseconds (5 minutes in this example)
const LOCKOUT_DURATION = 5 * 60 * 1000;
// const LOCKOUT_DURATION = 10 * 1000;

// Minimum and maximum password length
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 12;

// Password complexity regex (requires at least one uppercase, one lowercase, one digit, and one special character)
const PASSWORD_COMPLEXITY_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

// Password expiration period in days (90 days in this example)
const PASSWORD_EXPIRY_DAYS = 90;
// const PASSWORD_EXPIRY_MINUTES = 1;

// Register endpoint
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, city, country, email, password } =
      req.body;

    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check password length
    if (
      password.length < MIN_PASSWORD_LENGTH ||
      password.length > MAX_PASSWORD_LENGTH
    ) {
      return res.status(400).json({
        message: `Password must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH} characters long.`,
      });
    }

    // Check password complexity
    if (!PASSWORD_COMPLEXITY_REGEX.test(password)) {
      return res.status(400).json({
        message:
          "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      phoneNumber,
      city,
      country,
      email,
      password: hashedPassword,
      passwordHistory: [{ password: hashedPassword }],
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ message: "Error registering user" });
  }
};

// Login endpoint with account lockout
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check if the account is currently locked
    if (user.lockUntil && user.lockUntil > Date.now()) {
      return res
        .status(401)
        .json({ message: "Account is locked. Please try again later." });
    }

    // Check if password has expired
    const lastChangeDate = new Date(user.lastPasswordChange);
    const expiryDate = new Date(lastChangeDate);
    expiryDate.setDate(expiryDate.getDate() + PASSWORD_EXPIRY_DAYS);
    // expiryDate.setMinutes(expiryDate.getMinutes() + PASSWORD_EXPIRY_MINUTES);

    // Check if password has expired
    if (expiryDate < new Date()) {
      return res
        .status(401)
        .json({ message: "Password has expired. Please reset your password." });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Check if the passwords match
    if (!passwordMatch) {
      user.loginAttempts += 1;

      // Lock the account if too many failed attempts
      if (user.loginAttempts >= MAX_LOGIN_ATTEMPTS) {
        user.lockUntil = Date.now() + LOCKOUT_DURATION;
        user.loginAttempts = 0;
      }

      await user.save();

      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Reset login attempts on successful login
    user.loginAttempts = 0;
    await user.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, "secretKey");

    res.json({ token, userId: user._id });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ message: "Error logging in" });
  }
};

// Password change endpoint
exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const { id } = req.params;

    // Find the user by ID
    const user = await User.findById(id);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided old password with the stored hashed password
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    // Check if the old password is correct
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect old password" });
    }

    // Check if the new password is the same as the old password
    if (oldPassword === newPassword) {
      return res.status(400).json({
        message: "New password must be different from the old password",
      });
    }

    // Check if the new password meets complexity requirements
    if (!PASSWORD_COMPLEXITY_REGEX.test(newPassword)) {
      return res.status(400).json({
        message:
          "New password must include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
      });
    }

    // Check if the new password is in the password history
    if (
      user.passwordHistory.some((entry) =>
        bcrypt.compareSync(newPassword, entry.password)
      )
    ) {
      return res.status(400).json({
        message:
          "New password cannot be the same as any of the recent passwords.",
      });
    }

    // Store the old password in the password history
    user.passwordHistory.push({
      password: user.password,
      changeDate: user.lastPasswordChange,
    });

    // Update the user's password
    user.password = await bcrypt.hash(newPassword, 10);
    user.lastPasswordChange = Date.now();

    // Save the updated user to the database
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    console.error("Error changing password:", err);
    res.status(500).json({ message: "Error changing password" });
  }
};

// Get all registered users
exports.getAllUsers = async (req, res) => {
  try {
    // Find all users
    const users = await User.find();

    res.json({ users });
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Error retrieving users" });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by ID and delete it
    const user = await User.findByIdAndDelete(id);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, phoneNumber, city, country, email, password } =
      req.body;

    // Find the user by ID
    const user = await User.findById(id);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's information
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phoneNumber;
    user.city = city;
    user.country = country;
    user.email = email;
    user.password = password;

    // Save the updated user to the database
    await user.save();

    res.json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Error updating user" });
  }
};
