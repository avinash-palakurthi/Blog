const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();
//* if dotenv file is in another folder add path ex : {path:'/ folder name'}

//mongoDB connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "node server running",
  });
});

//port
const PORT = process.env.PORT || 8080;

//listening
app.listen(PORT, () => {
  console.log(
    `server running on ${process.env.DEV_MODE} port no ${PORT}`.bgCyan.white
  );
});
