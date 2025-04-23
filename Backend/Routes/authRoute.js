const express = require('express');
const { seekerLogin, seekerSignup } = require('../Controllers/seekerAuth');
const { signUpValidation, loginValidation } = require('../Middlewares/authValidateM');
const route = express.Router();



route.post('/seeker-signup',signUpValidation,seekerSignup)

route.post('/seeker-login',loginValidation,seekerLogin)

module.exports = route;