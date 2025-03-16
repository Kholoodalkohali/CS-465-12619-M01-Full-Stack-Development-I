const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars
app.engine("hbs", exphbs.engine({ extname: "hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

// Set up static folder
app.use(express.static(path.join(__dirname, "public")));

// Import and use routes
const indexRouter = require("./app_server/routes/index");
const travelRouter = require("./app_server/routes/travel");

app.use("/", indexRouter);
app.use("/travel", travelRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});