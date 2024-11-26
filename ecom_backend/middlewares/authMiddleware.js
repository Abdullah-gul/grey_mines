const jwt = require("jsonwebtoken");
const User = require("../model/User");

// Middleware to protect routes and validate JWT
exports.protect = async (req, res, next) => {
  let token;

  // Check if Authorization header is present
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract the token from the header
      token = req.headers.authorization.split(" ")[1];
      // Verify the token using JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Fetch the user associated with the token and add it to the request object
      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    // Token is missing
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Middleware to check if user has admin role
exports.admin = async (req, res, next) => {
  if (req.user) {
    try {
      // Fetch the user from the database to ensure the role is correct
      const user = await User.findById(req.user._id).select("role");

      if ((user && user.role === "admin") || user.role === "superAdmin") {
        next(); // Proceed to the next middleware or route handler
      } else {
        res.status(403).json({ message: "Forbidden, admin role required" });
      }
    } catch (error) {
      res.status(403).json({ message: "Forbidden, unable to verify role" });
    }
  } else {
    res.status(401).json({ message: "User not authenticated" });
  }
};
