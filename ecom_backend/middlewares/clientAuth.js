const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-auth-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_JWT);

    // console.log(user);
    console.log(decoded);
    if (decoded.role == "client") {
      //   req.user = decoded;
    } else if (decoded.role == "admin") {
      //   req.user = decoded;
    } else {
      throw new Error();
    }
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

module.exports = verifyToken;