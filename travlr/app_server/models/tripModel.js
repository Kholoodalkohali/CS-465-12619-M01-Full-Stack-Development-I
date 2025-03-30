// app_server/models/tripModel.js
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
