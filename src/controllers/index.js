const AuthController = require('./Auth');
const CountriesController = require('./Countries');

const Auth = new AuthController();
const Countries = new CountriesController();

module.exports = { Auth, Countries };
