const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout.js');
const index = require('./models');

app.use(morgan('dev'));
app.use(express.static('./static')); //reads css and html files -- or any static files

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send(layout('hello world!'));
});

index.db.authenticate().then(() => {
  console.log('connected to the database');
});

app.listen(1337);
