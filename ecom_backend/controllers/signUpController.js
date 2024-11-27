const User = require("../model/User");
const Credentials = require("../model/Credentials");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class SignUpController {
  static async Execute(req, res) {
    const { fullname, email, phone } = req.body;

    const user = new User({
      fullname: fullname.trim(),
      email: email.trim().toLowerCase(),
      mobile: phone,
    });

    const existingUser = await User.find({
      email: email,
    });
    const existUser = await User.find({
      mobile: phone,
    });

    if (existingUser.length > 0 || existUser.length > 0) {
      res.status(200).json({
        message: `Email Address is already registered`,
      });
    } else {
      console.log(req.body);
      user
        .save()
        .then((responce) => {
          const { password } = req.body;

          bcrypt.hash(password, saltRounds).then(async function (hash) {
            // Store hash in your password DB.

            const credential = new Credentials({
              user: responce._id,
              email: responce.email.trim(),
              user_password: hash,
              role: "client",
            });

            credential
              .save()
              .then(() => {
                res.status(200).json({
                  message: `user added sucessfully`,
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

module.exports = SignUpController;
