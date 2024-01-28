const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = require('../router');
const cookieParser = require('cookie-parser');
const { auth } = require('../middlewares/authMiddleware');

mongoose.connect('mongodb://127.0.0.1:27017/movie_magic')
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(err));


const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(router);

module.exports = app;