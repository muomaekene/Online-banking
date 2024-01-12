const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const asyncHandler = require("express-async-handler");

const User = require("../models/user.model");

const sendVerificationEmail = require("../utils/sendEmail");
const { decodeToken, encodeToken } = require("../utils/token");
const { SECRET_ACCESS_TOKEN } = require("../config");

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

  const emailExists = await User.findOne({ email });

  try {
    if (emailExists) {
      return res.status(403).json({
        message: "This email has been taken.",
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

        const verificationToken = encodeToken(userId);

        sendVerificationEmail(email, verificationToken);
      });
    }
  } catch (error) {
    return res.status(412).json({
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
            SECRET_ACCESS_TOKEN,
            {
              expiresIn: "30m",
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
    const user = await User.findOne({ userId: id });

    if (!user) {
      return res
        .status(403)
        .json({ success: "false", message: "User not found" });
    } else {
      return res.status(200).json({
        success: true,
        message: `Profile of ${user.firstName} ${user.lastName}`,
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
        .status(401)
        .json({ success: false, message: "User Id not found" });
    } else {
      await User.updateOne(decodedUserId, {
        $set: {
          isVerified: true,
        },
      });

      const updatedData = await User.findOne(decodedUserId);
      return res.status(201).json({
        success: true,
        message: "User successfully verified!",
        data: updatedData,
      });
    }
  } catch (error) {
    return res.status(401).json({
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
