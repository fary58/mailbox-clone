const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
app.use(cors());

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const connectDB = require("./db/connectionDB");
connectDB();
const PORT = 8080;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
