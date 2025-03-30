const trips = require('../models/trips.json');

exports.travelPage = (req, res) => {
    res.render('pages/travel', { title: 'Travlr Getaways - Travel', trips });
};
