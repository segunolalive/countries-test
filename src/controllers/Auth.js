const { sign } = require('jsonwebtoken');
const { SECRET, USERNAME, PASSWORD } = require('../constants');

module.exports = class Auth {
  constructor(username = USERNAME, password = PASSWORD) {
    this.username = username;
    this.password = password;
    this.login = this.login.bind(this);

    this.options = {
      expiresIn: '1h'
    };
  }

  login(req, res) {
    const { username } = req.body;
    try {
      const token = sign({ username }, SECRET, this.options);
      res.status(200).send({ message: 'login successful', token });
    } catch (error) {
      res
        .status(403)
        .send({ error: { message: 'username or password invalid' } });
    }
  }
};
