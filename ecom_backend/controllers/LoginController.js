const User = require("../model/User");
const Credentials = require("../model/Credentials")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
class LoginController {
  static async Execute(req, res) {
    const { email, user_password } = req.body;

    console.log("in login")

    if (email != undefined && user_password != undefined) {
      const existingUser = await Credentials.findOne({ email: email.toLowerCase() });
          console.log("in first")
      if (existingUser) {
        const user = User.find({ _id: existingUser.user });
            //  console.log(existingUser)
        await bcrypt
          .compare(user_password, existingUser.user_password)
          .then(function (result) {
            if (result == true) {
              const token = jwt.sign(
                JSON.stringify({
                  _id: existingUser._id,
                  role: existingUser.role,
                }),
                process.env.ACCESS_TOKEN_JWT
              );
              res.setHeader("x-auth-token", token);
             console.log()
              res.status(200).send({
                message: "login successfull",
                email: existingUser.email,
                // _id: user._id,
                _id: existingUser.user,
                token: token,
              });
            } else {
              res.status(400).send({ message: "invalide credentials" });
            }
          });
      } else {
        res.status(400).send({ message: "user not found" });
      }
    } else {
      res.status(400).send({ message: "request not valid" });
    }
  }
}

module.exports = LoginController