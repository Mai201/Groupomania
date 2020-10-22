const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const dataCtlr = require('../controllers/user');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');


const createAccountLimiter = rateLimit ( { // limitation nombre de création de comptes /même adresse IP (limite = 5)
    windowMs : 60 * 60 * 1000 , //  fenêtre de 1h      
    max : 5 , //  commence le blocage après 5 requêtes  
    message :
      " Trop de comptes créés à partir de cette adresse IP, veuillez réessayer après une heure "
  } ) ;
  
// Routes utilisateurs

router.get('/createdb', dataCtlr.createDataBase);
router.get('/createtables', dataCtlr.createDataTable);

router.post('/signup', createAccountLimiter, dataCtlr.signup);
router.post('/login', dataCtlr.login);

router.get('/getusers', authAdmin, dataCtlr.getUsers); // présent dans dashadmin
router.get('/getoneuser/:id', auth, dataCtlr.getOneUser);

router.post('/deleteUser', auth, dataCtlr.deleteUser); // implémenter distinction sur axios membre/admin (dashadmin)
router.post('/updateuser/:id', auth, dataCtlr.updateUser);

module.exports = router;