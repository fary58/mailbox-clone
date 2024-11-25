const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
app.use(cors());

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
app.use("/api/v1/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
