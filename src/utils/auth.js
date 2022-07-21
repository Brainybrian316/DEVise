const jwt = require('jsonwebtoken');

const secret = process.env.ACCESS_TOKEN_SECRET;
const expiration = process.env.ACCESS_TOKEN_EXPIRATION;

module.exports = {
  authMiddleware: function ({ req}) {
    const token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid Credentials');
    }

    return req;
  },
  signToken: function ({ id, email, username }) {
    const payload = {
      id,
      email,
      username
    };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
}





