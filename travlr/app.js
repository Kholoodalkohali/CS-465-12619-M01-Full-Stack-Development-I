const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const indexRouter = require('./app_server/routes/index');
const travelRouter = require('./app_server/routes/travel');

const app = express();

// Set up Handlebars
app.engine('hbs', exphbs.engine({ 
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'hbs');

// Set static files location
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/travel', travelRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
