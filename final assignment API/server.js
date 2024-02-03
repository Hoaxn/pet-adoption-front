const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("./logger");

// Create Express application
const app = express();

// MongoDB Atlas connection string
const mongoURI =
  "mongodb+srv://avinavbhatta0:zy29xIfupQGq2lHC@cluster0.jlhsoph.mongodb.net/";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Middleware to parse JSON bodies
app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors(corsOptions));

// Log API calls

app.use(logger.logAPICall);

// Routes
const authRoutes = require("./routes/authRoutes");
const petRoutes = require("./routes/petRoutes");
const adoptionFormRoutes = require("./routes/adoptionFormRoutes");
const likedPetsRoutes = require("./routes/likedPetsRoutes");

app.use(authRoutes);
app.use(petRoutes);
app.use(adoptionFormRoutes);
app.use(likedPetsRoutes);

app.use(express.static("public"));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
