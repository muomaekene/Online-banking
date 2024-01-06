const express = require("express");
const {
  register,
  login,
  userProfile,
  allUsers,
} = require("../controllers/auth.controller");
const {
  registrationValidation,
  loginValidation,
} = require("../middleware/authValidation.middleware");

const verifyToken = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", registrationValidation, register);
router.post("/login", loginValidation, login);
router.get("/profile/:id", verifyToken, userProfile);
router.get("/users", verifyToken, allUsers);

module.exports = router;
