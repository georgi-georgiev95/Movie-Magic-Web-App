const express = require('express');
const path = require('path');
const router = require('../router');

const app = express();
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(router);

module.exports = app;