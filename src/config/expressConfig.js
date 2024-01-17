const express = require('express');
const path = require('path');
const handlebars = require('./handlebarsConfig');

const app = express();
handlebars(app);
app.use(express.static(path.resolve(__dirname, '../public')));

module.exports = app;