const jwt = require('jsonwebtoken');
const { SECRET } = require('../constants');

exports.authenticate = (req, res, next) => {
  const token =
    (req.headers.authorization && req.headers.authorization.split(' ')[1]) ||
    req.headers['x-access-token'];
  if (!token) {
    return res
      .status(401)
      .send({ error: { message: 'Access token required' } });
  }
  try {
    jwt.verify(token, SECRET);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res
        .status(401)
        .send({ error: { message: 'your token is expired' } });
    }
    return res.status(401).json({
      error: { message: 'unauthorized accesss. Login to continue' }
    });
  }
  next();
};
