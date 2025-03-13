const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

//MIddleware
app.use(express.json());
app.use(cookieParser());

//Routes
app.get("/", (req, res)=>{
    return res.json({message: "Hello World"});
})

module.exports = app;
