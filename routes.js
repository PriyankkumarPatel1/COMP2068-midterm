// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const arcadeGamesRoutes = require('./routes/arcadegames');

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});

app.post('/', (req, res) => {
  res.render('pages/home');
});

app.use('/arcadeGames', arcadeGamesRoutes);

// Exporting the changes
module.exports = app;