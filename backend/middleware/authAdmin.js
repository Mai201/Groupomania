const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});
const TOKEN = process.env.TOKEN;

// Authentification ADMIN des requetes grâce au token

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, TOKEN);
    const userId = decodedToken.userId;
    const status = decodedToken.status;

    if (status !== 'admin' && req.body.userId && req.body.userId != userId) 
    {
      throw 'Invalid user ID (not admin)';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: 'erreur auth'
    });
  }
};