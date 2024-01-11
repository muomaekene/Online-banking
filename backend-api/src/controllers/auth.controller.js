const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");

const sendConfirmationEmail = require("../utils/sendEmail");
const { decodeToken, encodeToken } = require("../utils/generateToken");

const register = asyncHandler(async (req, res) => {
  const {
    email,
    password,
    firstName,
    initial,
    lastName,
    maidenName,
    dob,
    address,
    country,
    state,
    city,
    zipcode,
    phone1,
    phone2,
    ssn,
    ein,
    employmentStatus,
    sourceOfIncome,
  } = req.body;

  const verifyEmail = await User.findOne({ email });

  try {
    if (verifyEmail) {
      return res.status(403).json({
        message:
          "There is already an account registered with this email, try another.",
      });
    } else {
      const userId = uuidv4();

      bcrypt.hash(password, 10).then((hash) => {
        const newUser = new User({
          userId,
          email,
          password: hash,
          firstName,
          initial,
          lastName,
          maidenName,
          dob,
          address,
          country,
          state,
          city,
          zipcode,
          phone1,
          phone2,
          ssn,
          ein,
          employmentStatus,
          sourceOfIncome,
        });

        newUser.save().then((response) => {
          return res.status(201).json({
            success: true,
            message: "User successfully created!",
            data: response,
          });
        });

        const confirmationToken = encodeToken(userId);
        sendConfirmationEmail(email, confirmationToken);
      });
    }
  } catch (error) {
    return res.status(412).send({
      success: false,
      message: error,
    });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let getUser;

  await User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Authentication Failed: User does not exist",
        });
      }

      getUser = user;

      return bcrypt.compare(password, user.password).then((response) => {
        if (!response) {
          return res.status(401).json({
            message: "Authentication Failed: Password is incorrect",
          });
        } else {
          let jwtToken = jwt.sign(
            {
              email: getUser.email,
              userId: getUser.userId,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );

          return res.status(200).json({
            accessToken: jwtToken,
            userId: getUser.userId,
          });
        }
      });
    })
    .catch((error) => {
      return res.status(401).json({ success: false, message: error.message });
    });
});

const userProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const verifyUser = await User.findOne({ userId: id });

    if (!verifyUser) {
      return res
        .status(403)
        .json({ success: "false", message: "User not found" });
    } else {
      return res.status(200).json({
        success: true,
        message: `Profile of ${verifyUser.firstName} ${verifyUser.lastName}`,
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

const allUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      message: "Users list",
      data: users,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.params;

  try {
    const id = decodeToken(token);
    const decodedUserId = { userId: id };

    if (!decodedUserId) {
      return res
        .status(400)
        .send({ success: false, message: "User Id not found" });
    } else {
      await User.updateOne(decodedUserId, {
        isVerified: true,
      });

      const updatedData = await User.findOne(decodedUserId);
      return res.status(201).send({
        success: true,
        message: "User successfully verified!",
        data: updatedData,
      });
    }
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = {
  register,
  login,
  userProfile,
  allUsers,
  verifyEmail,
};
