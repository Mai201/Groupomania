const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const dataRoute = require('./routes/user');
const messageRoute = require('./routes/message');
const path = require('path');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({limit:"20mb"})); // limite pour ne pas surcharger DB
app.use(express.json({limit:"20mb"}));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/', dataRoute);
app.use('/api/', messageRoute);

module.exports = app;