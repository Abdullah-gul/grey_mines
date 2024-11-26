const loginRouter =require("express").Router();
const forgetPasswordRouter = require("../controllers/forgetPasswordRouter");
const { body, validationResult } = require("express-validator");

loginRouter.post("/reset_password", 
body("email").isEmail(),
(req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  } else {
  
    forgetPasswordRouter.Execute(req, res);
  }
});

module.exports = loginRouter;