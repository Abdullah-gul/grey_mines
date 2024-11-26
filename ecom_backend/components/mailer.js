var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: "gmail",
  port: 465,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

module.exports = transport;