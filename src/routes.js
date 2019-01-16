const express = require('express');
const { Auth, Countries } = require('./controllers');
const { authenticate } = require('./middlewares');

const Router = express.Router();

Router.delete('/countries/:country', authenticate, Countries.deleteCountry);

Router.route('/countries')
  .all(authenticate)
  .get(Countries.getCountries)
  .put(Countries.addCountry);

Router.post('/login', Auth.login);

module.exports = Router;
