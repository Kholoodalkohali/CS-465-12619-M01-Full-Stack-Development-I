// app.js
const express = require('express');
const connectDB = require('./app_server/config/database');
const travelRoutes = require('./app_server/routes/travel');

require('dotenv').config();
const app = express();

connectDB();
app.use(express.json());
app.use(travelRoutes);

module.exports = app;
