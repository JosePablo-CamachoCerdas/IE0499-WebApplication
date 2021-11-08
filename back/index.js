// libraries
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
require("dotenv").config();

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

 
// db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true}).then(() => {console.log("Database connection success")})

// requests
app.use("/api/question", require("./routes/question"));
app.use("/api/auth", require("./routes/auth"));

// listening port
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on port: " + port);
})
