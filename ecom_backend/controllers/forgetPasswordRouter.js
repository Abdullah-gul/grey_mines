const User = require("../model/User");

require("dotenv").config();
const transporter = require("../components/mailer")
class forgetPasswordRouter {
  static async Execute(req, res) {
    const { email } = req.body;
    

    var mailOptions = {
        from: 'youremail@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };

      
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      

  }
}

module.exports = forgetPasswordRouter