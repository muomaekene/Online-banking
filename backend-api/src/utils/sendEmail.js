const nodemailer = require("nodemailer");

const sendConfirmationEmail = (email, confirmationToken) => {
  const { SENDER_ADDRESS, SENDER_PASSWORD, BASE_URL } = process.env;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SENDER_ADDRESS,
      pass: SENDER_PASSWORD,
    },
  });

  const verificationLink = `${BASE_URL}/verify-email/${confirmationToken}`;

  const mailConfigurations = {
    from: "no-reply@cunj.com",
    to: email,
    subject: "Email Verification",
    text: `Hello user. You have recently visited our website and entered your email.\nPlease follow the provided link to verify your email ${verificationLink}.\nThanks`,
  };

  transporter.sendMail(mailConfigurations, (error, response) => {
    if (error) throw Error(error);
    console.log("Email sent successfully");
    return response;
  });
};

module.exports = sendConfirmationEmail;
