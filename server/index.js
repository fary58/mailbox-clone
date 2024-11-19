const express = require('express');
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
app.use(cors());



const connectDB = require("./db/connectionDB");
connectDB();


const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
});