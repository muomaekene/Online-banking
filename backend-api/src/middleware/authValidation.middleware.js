const validator = require("../utils/validate");

const registrationValidation = async (req, res, next) => {
  const rules = {
    email: "required|string|email",
    password:
      "required|string|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/",
    firstName: "required|string|min:3",
    initial: "required|string|max:1|min:1",
    lastName: "required|string|min:3",
    maidenName: "required|string|min:3",
    dob: "required|date",
    address: "required|string",
    country: "required|string",
    state: "required|string",
    city: "required|string",
    zipcode: "required|numeric",
    phone1: "required|numeric",
    phone2: "required|numeric",
    ssn: "required|numeric",
    ein: "required|numeric",
    employmentStatus: "required|string",
    sourceOfIncome: "required|string",
  };

  await validator(req.body, rules, {}, (err, status) => {
    if (!status) {
      res
        .status(412)
        .send({ success: false, message: "Validation failed!", data: err });
    } else {
      next();
    }
  });
};

const loginValidation = async (req, res, next) => {
  const rules = {
    email: "required|string|email",
    password:
      "required|string|regex:/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/",
  };

  await validator(req.body, rules, {}, (err, status) => {
    if (!status) {
      res
        .status(412)
        .send({ success: false, message: "Validation failed!", data: err });
    } else {
      next();
    }
  });
};

module.exports = {
  registrationValidation,
  loginValidation,
};
