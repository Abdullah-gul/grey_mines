const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const  authRoutes = require("./routers/adminRoutes")
const  signUpRouter = require("./routers/signUpRouter")
const  loginRouter = require("./routers/loginRouter")


dotenv.config();

const app = express();

// Security headers
app.use(helmet());

// Parse incoming JSON requests
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  // app.use( authRoutes);
  app.use( signUpRouter);
  app.use(loginRouter)


  const PORT = process.env.PORT || 5000;

// Start HTTP server and configure 
 app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
