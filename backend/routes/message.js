const express = require('express');
const router = express.Router();
const messageCtlr = require('../controllers/message');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');
const isOwnerOrAdmin = require('../middleware/isOwnerOrAdmin');
const multer = require('../middleware/multer-config'); 

//Routes pour les posts

router.get('/createtable', messageCtlr.createmessageTable)
router.get('/createreponse', messageCtlr.createresponsetable)

// pour messages
router.get('/getmessages', auth, messageCtlr.getMessages);
router.get('/getonemessage/:id', auth, messageCtlr.getoneMessage);
router.post('/postmessage', auth, multer, messageCtlr.postmessage); 
router.post('/deletemessage', auth, isOwnerOrAdmin, messageCtlr.deleteMessage); // seulement pour propriétaire ou admin
router.post('/updatemessage', auth, messageCtlr.updateMessage); // pas droit spé pour admin

// pour réponses aux messages
router.get('/getresponse/:id', auth, messageCtlr.getResponse); 
router.get('/getallresponses' , authAdmin, messageCtlr.getAllResponses); // seulement pour dashadmin
router.post('/responsemessage', auth, messageCtlr.responseMessage); 
router.post('/deleteresponse', authAdmin, messageCtlr.deleteResponse); // seulement pour admin

module.exports = router;