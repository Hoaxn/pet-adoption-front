const express = require("express");
const adoptionFormController = require("../controllers/adoptionFormController");
const authenticateToken = require("../middlewares/authMiddleware");

const router = express.Router();

// Save adoption form data
router.post(
  "/form/adoptionForm",
  authenticateToken,
  adoptionFormController.saveAdoptionForm
);

// Get all adoptions
router.get(
  "/form/adoptionForm/:userId",
  authenticateToken,
  adoptionFormController.getAdoptionFormsByUserId
);

// Delete an adoption
router.delete(
  "/form/adoptionForm/:userId/:petId",
  authenticateToken,
  adoptionFormController.deleteAdoptionForm
);

module.exports = router;
