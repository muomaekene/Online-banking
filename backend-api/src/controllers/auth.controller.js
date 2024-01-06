const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");

const userModel = require("../models/user.model");

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

  const verifyEmail = await userModel.findOne({ email });

  try {
    if (verifyEmail) {
      return res.status(403).json({
        message: "There is already an account registered with this email",
      });
    } else {
      const userId = uuidv4();

      bcrypt.hash(password, 10).then((hash) => {
        const newUser = new userModel({
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
            result: response,
          });
        });
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

  await userModel
    .findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Authentication Failed: check email",
        });
      }

      getUser = user;

      return bcrypt.compare(password, user.password).then((response) => {
        if (!response) {
          return res.status(401).json({
            message: "Authentication Failed: check password",
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
    .catch((err) => {
      return res.status(401).json({ success: false, message: err.message });
    });
});

const userProfile = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const verifyUser = await userModel.findOne({ userId: id });

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
    const users = await userModel.find();
    console.log(users);

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

module.exports = {
  register,
  login,
  userProfile,
  allUsers,
};
