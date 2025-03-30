// app_server/scripts/populateDB.js
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const Trip = require('../models/tripModel');

const sampleTrips = [
    {
        destination: 'Bali, Indonesia',
        startDate: new Date('2025-06-10'),
        endDate: new Date('2025-06-20'),
        price: 1200,
        description: 'A relaxing tropical getaway to Bali.',
        imageUrl: 'https://example.com/bali.jpg'
    },
    {
        destination: 'Paris, France',
        startDate: new Date('2025-07-05'),
        endDate: new Date('2025-07-15'),
        price: 2000,
        description: 'Explore the city of love with guided tours.',
        imageUrl: 'https://example.com/paris.jpg'
    }
];

const populateDatabase = async () => {
    try {
        await connectDB();
        await Trip.deleteMany(); // Clear old data
        await Trip.insertMany(sampleTrips);
        console.log('✅ Sample trips added to database.');
        mongoose.connection.close();
    } catch (error) {
        console.error('❌ Error populating database:', error);
    }
};

populateDatabase();
