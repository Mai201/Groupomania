const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const dataCtlr = require('../controllers/user');
const auth = require('../middleware/auth');


const createAccountLimiter = rateLimit ( { // limitation nombre de création de comptes /même adress IP (limite = 5)
    windowMs : 60 * 60 * 1000 , //  fenêtre de 1h      
    max : 5 , //  commence le blocage après 5 requêtes  
    message :
      " Trop de comptes créés à partir de cette adresse IP, veuillez réessayer après une heure "
  } ) ;
  
  //Routes utilisateurs

router.get('/createdb', dataCtlr.createDataBase);
router.get('/createtables', dataCtlr.createDataTable);

router.get('/getusers', dataCtlr.getUsers);
router.get('/getoneuser/:id', dataCtlr.getOneUser)

router.post('/signup', createAccountLimiter, dataCtlr.signup);
router.post('/login', dataCtlr.login);

router.post('/deleteUser',auth, dataCtlr.deleteUser);
router.post('/updateuser/:id', dataCtlr.updateUser);



module.exports = router;