const express = require("express");
const {
  register,
  login,
  userProfile,
  allUsers,
  verifyEmail,
} = require("../controllers/auth.controller");
const {
  registrationValidation,
  loginValidation,
} = require("../middleware/authValidation.middleware");

const accessToken = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", registrationValidation, register);
router.post("/login", loginValidation, login);
router.get("/profile/:id", accessToken, userProfile);
router.get("/users", accessToken, allUsers);
router.get("/verify-email/:token", verifyEmail);

module.exports = router;
