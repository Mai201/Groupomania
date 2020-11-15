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
router.post('/deletemessage', auth, messageCtlr.deleteMessage);
router.post('/updatemessage', auth, messageCtlr.updateMessage);

// pour réponses aux messages
router.get('/getresponse/:id', auth, messageCtlr.getResponse); 
router.get('/getallresponses' , authAdmin, messageCtlr.getAllResponses); // seulement présent dans dashadmin
router.post('/responsemessage', auth, messageCtlr.responseMessage); 
router.post('/deleteresponse', auth, messageCtlr.deleteResponse); 

module.exports = router;