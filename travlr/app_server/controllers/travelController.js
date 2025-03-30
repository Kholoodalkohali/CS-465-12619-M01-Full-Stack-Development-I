// app_server/controllers/travelController.js
const Trip = require('../models/tripModel');

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving trips', error });
    }
};

module.exports = { getTrips };
