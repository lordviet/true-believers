const jwt = require('jsonwebtoken');
const secret = 'shhhhh';
const config = require('../config/config');

const withAuth = function (req, res, next) {
    // const token = 
    //   req.body.token ||
    //   req.query.token ||
    //   req.headers['x-auth-token'] ||
    //   req.cookies.token;
      const token = req.cookies[config.authCookieName] || '';
      console.log(token);
      
      if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                req.username = decoded.username;
                next();
            }
        });
    }
}
module.exports = withAuth;