const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
const app = express();
require("dotenv").config();
app.use(cors());
const userRoutes = require('./routes/userRoutes.js');
const emailRoutes = require('./routes/userRoutes.js');



const connectDB = require("./db/connectionDB");
connectDB();
const PORT = 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/email", emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
