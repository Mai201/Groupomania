const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({path: './.env'});
const TOKEN = process.env.TOKEN;

// Permission pour propriétaire du post ou pour admin

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, TOKEN);
    const userId = decodedToken.userId;
    const status = decodedToken.status;
    // console.log(status);

    if (req.body.userId && req.body.userId != userId || status !== "admin") {
      throw 'Not the owner neither admin';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: 'erreur de permission'
    });
  }
};