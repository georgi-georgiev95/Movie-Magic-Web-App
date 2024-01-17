const express = require('express');
const path = require('path');
const handlebars = require('./handlebarsConfig');
const router = require('../router');

const app = express();
handlebars(app);
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(router);

module.exports = app;