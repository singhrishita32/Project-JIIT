const express = require('express'); 
const app=express();
const Auth = require('../Controllers/auth');
const validator = require('../Validators/index')
const router= express.Router();
router.post('/signupT',validator.userSignupValidator,Auth.signupT);
router.post('/signinT',Auth.signinT);
router.get('/signoutT',Auth.signoutT);

module.exports = router
