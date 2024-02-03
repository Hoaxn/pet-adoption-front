const { body } = require("express-validator");

exports.createPetValidator = [
  body("name").trim().notEmpty().withMessage("Pet name is required"),
  body("age")
    .isInt({ min: 0 })
    .withMessage("Age must be a non-negative integer"),
  body("species").trim().notEmpty().withMessage("Species is required"),
  body("breed").trim().notEmpty().withMessage("Breed is required"),
  body("gender")
    .isIn(["male", "female"])
    .withMessage("Gender must be either 'male' or 'female'"),
  body("description").trim().notEmpty().withMessage("Description is required"),
];

exports.updatePetValidator = [
  body("name").trim().notEmpty().withMessage("Pet name is required"),
  body("age")
    .isInt({ min: 0 })
    .withMessage("Age must be a non-negative integer"),
  body("species").trim().notEmpty().withMessage("Species is required"),
  body("breed").trim().notEmpty().withMessage("Breed is required"),
  body("gender")
    .isIn(["male", "female"])
    .withMessage("Gender must be either 'male' or 'female'"),
  body("description").trim().notEmpty().withMessage("Description is required"),
];
