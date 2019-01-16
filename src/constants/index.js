exports.SECRET =
  process.env.AUTH_SECRET || 'use-long-cryptographically-secure-secret';
exports.USERNAME = process.env.USERNAME || 'admin';
exports.PASSWORD = process.env.PASSWORD || 'admin';
