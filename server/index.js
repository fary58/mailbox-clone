const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
const app = express();
require("dotenv").config();
app.use(cors());
import userRoute from "./routes/user.route.js";
import emailRoute from "./routes/email.route.js";



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
app.use("/api/v1/user", require("./routes/userRoutes.js"));
app.use("/api/v1/email", require("./routes/emailRoutes.js"));

app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
