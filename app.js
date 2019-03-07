const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout.js');
const models = require('./models');
// const {Page} = require('./models');
// const {User} = require('./models');

app.use(morgan('dev'));
app.use(express.static('./static')); //reads css and html files -- or any static files

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send(layout('hello world!'));
});

models.db.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 1337;

const init = async () => {
  await models.User.sync();
  await models.Page.sync();

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

init();
