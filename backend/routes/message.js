const express = require('express');
const router = express.Router();
const messageCtlr = require('../controllers/message');
const auth = require('../middleware/auth')
// const auth = require('../middleware/multer-config'); à faire

//Routes pour les posts

router.get('/createtable', messageCtlr.createmessageTable)
router.get('/createreponse', messageCtlr.createresponsetable)

// pour messages
router.get('/getmessages', messageCtlr.getMessages); // ajouter auth ici
router.get('/getonemessage/:id',  messageCtlr.getoneMessage); // ajouter auth ici
router.post('/postmessage',auth, messageCtlr.postmessage); // ajouter multer
router.post('/deletemessage',auth, messageCtlr.deleteMessage); // ajouter multer + fs
router.post('/updatemessage',auth, messageCtlr.updateMessage); // ajouter multer + fs

// pour réponses aux messages
router.get('/getresponse/:id', messageCtlr.getResponse); // ajouter auth ici
router.get('/getallresponses' , messageCtlr.getAllResponses); // ajouter auth ici
router.post('/responsemessage',auth, messageCtlr.responseMessage);
router.post('/deleteresponse', auth, messageCtlr.deleteResponse);

module.exports = router;