const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signup');

router.post('/signup', signupController.postSignup);
router.get('/findUser/:id', signupController.findUser);


module.exports = router;