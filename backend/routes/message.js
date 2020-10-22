const express = require('express');
const router = express.Router();
const messageCtlr = require('../controllers/message');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const multer = require('../middleware/multer-config'); 

//Routes pour les posts

router.get('/createtable', messageCtlr.createmessageTable)
router.get('/createreponse', messageCtlr.createresponsetable)

// pour messages
router.get('/getmessages', auth, messageCtlr.getMessages);
router.get('/getonemessage/:id', auth, messageCtlr.getoneMessage);
router.post('/postmessage', auth, multer, messageCtlr.postmessage); 
router.post('/deletemessage', auth, messageCtlr.deleteMessage); // ajouter fs (pas besoin de multer)
router.post('/updatemessage', auth, messageCtlr.updateMessage); // ajouter multer + fs

// pour réponses aux messages
router.get('/getresponse/:id', auth, messageCtlr.getResponse); // (auth à implémenter dans axios)
router.get('/getallresponses' , authAdmin, messageCtlr.getAllResponses); // présent dans dashadmin
router.post('/responsemessage', auth, messageCtlr.responseMessage); 
router.post('/deleteresponse', auth, messageCtlr.deleteResponse); // comme sur mur, faire distinction membre/admin sur dashadmin

module.exports = router;