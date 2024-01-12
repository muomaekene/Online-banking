const nodemailer = require("nodemailer");
const {
  BASE_URL,
  SENDER_ADDRESS,
  SENDER_PASSWORD,
} = require("../config/index");

const sendVerificationEmail = (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SENDER_ADDRESS,
      pass: SENDER_PASSWORD,
    },
  });

  const verificationLink = `${BASE_URL}/auth/verify-email/${verificationToken}`;

  const mailConfigurations = {
    from: "no-reply@cunj.com",
    to: email,
    subject: "Email Verification",
    text: `Hello user. You have recently visited our website and entered your email.\nPlease follow the provided link to verify your email ${verificationLink}.\nThanks`,
  };

  transporter.sendMail(mailConfigurations, (error, response) => {
    if (error) throw Error(error);
    console.log("Email sent, check your box.");
    return response;
  });
};

module.exports = sendVerificationEmail;
