const { body } = require("express-validator");

exports.registerUserValidator = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("phoneNumber").trim().notEmpty().withMessage("Phone number is required"),
  body("email").isEmail().withMessage("Please provide a valid email address"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  // body("confirmPassword")
  //   .trim()
  //   .custom((value, { req }) => {
  //     if (value !== req.body.password) {
  //       throw new Error("Passwords do not match");
  //     }
  //     return true;
  //   }),
];

exports.loginUserValidator = [
  body("email").isEmail().withMessage("Please provide a valid email address"),
  body("password").trim().notEmpty().withMessage("Password is required"),
];
