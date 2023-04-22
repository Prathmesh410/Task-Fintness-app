require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes import
const exerciseRoutes = require('./routes/exercise')
const programRoutess = require('./routes/program')
//routes
app.use("/api",exerciseRoutes)
app.use("/api",programRoutess)

//middelwares

app.use(bodyParser.urlencoded({ extended: true }));
//DB Connect
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(() =>{
    console.log("DB Connected")
}).catch(() => {
    console.log("DB not Connected")
});

const port = process.env.PORT || 6000  ;
app.listen(port,() =>{
    console.log(`app is running at ${port}`);
});