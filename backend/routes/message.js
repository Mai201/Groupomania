const express = require('express');
const router = express.Router();
const messageCtlr = require('../controllers/message');
const auth = require('../middleware/auth')
// const auth = require('../middleware/multer-config'); à faire

//Routes pour les posts

router.get('/createtable', messageCtlr.createmessageTable)
router.get('/createreponse', messageCtlr.createresponsetable)

// pour messages
router.get('/getmessages', messageCtlr.getMessages); // (auth à implémenter dans axios)
router.get('/getonemessage/:id', messageCtlr.getoneMessage); // (à implémenter dans axios)
router.post('/postmessage', auth, messageCtlr.postmessage); // ajouter multer
router.post('/deletemessage', auth, messageCtlr.deleteMessage); // ajouter fs (pas besoin de multer)
router.post('/updatemessage', auth, messageCtlr.updateMessage); // ajouter multer + fs

// pour réponses aux messages
router.get('/getresponse/:id', messageCtlr.getResponse); // (auth à implémenter dans axios)
router.get('/getallresponses' , messageCtlr.getAllResponses); // (authAdmin à implémenter dans axios (slmt présent dans dashadmin,donc pas besoin de distinction membre/admin))
router.post('/responsemessage', auth, messageCtlr.responseMessage); 
router.post('/deleteresponse', auth, messageCtlr.deleteResponse); // comme sur mur, faire distinction membre/admin sur dashadmin

module.exports = router;