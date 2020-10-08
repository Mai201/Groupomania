const express = require('express');
const router = express.Router();
const messageCtlr = require('../controllers/message');
const auth = require('../middleware/auth')

//Routes pour les posts

router.get('/createtable', messageCtlr.createmessageTable)
router.get('/createreponse', messageCtlr.createresponsetable)

// pour messages
router.get('/getmessages', messageCtlr.getMessages);
router.get('/getonemessage/:id',  messageCtlr.getoneMessage);
router.post('/postmessage',auth, messageCtlr.postmessage);
router.post('/deletemessage',auth, messageCtlr.deleteMessage);
router.post('/updatemessage',auth, messageCtlr.updateMessage);

// pour réponses aux messages
router.get('/getresponse/:id', messageCtlr.getResponse);
router.get('/getallresponses' , messageCtlr.getAllResponses);
router.post('/responsemessage',auth, messageCtlr.responseMessage);
router.post('/deleteresponse', auth, messageCtlr.deleteResponse);

module.exports = router;