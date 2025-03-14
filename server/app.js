const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

//MIddleware
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api/v1/auth', authRoutes);

module.exports = app;
