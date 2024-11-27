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
const forgetPasswordRouter = require("./routers/forgetPasswordRouter")
const productRouter =require('./routers/productRouter')
const fileRoute =require('./routers/fileRoute')
const upload = require("./middlewares/upload");

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
  app.use("/api/", signUpRouter);
  app.use("/api/",loginRouter)
  app.use("/api/", productRouter(upload))
  // app.use("/api/", fileRoute)
  app.use("/api/",forgetPasswordRouter)
  

  const PORT = process.env.PORT || 5000;

// Start HTTP server and configure 
 app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
