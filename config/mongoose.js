const mongooose = require('mongoose');

mongooose.connect('mongodb+srv://rohitlohra3036:kmkr5W9hFX9eqhEt@cluster0.0nekra1.mongodb.net/test');

const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

module.exports = db;