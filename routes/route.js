const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signup');
const busController = require('../controllers/bus');
const reserveController = require('../controllers/reserve');

router.post('/signup', signupController.postSignup);
router.get('/findUser/:id', signupController.findUser);
router.get('/findByNicSignup/:id', signupController.findByNicSignup);


router.post('/addbus', busController.postBus);
router.get('/getbus', busController.getBus);


router.post('/addreserve', reserveController.postReserve);
router.get('/getreserve', reserveController.getReserve);


module.exports = router;