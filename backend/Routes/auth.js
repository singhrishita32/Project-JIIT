const express = require('express'); 
const app=express();
const Auth = require('../Controllers/auth');
const validator = require('../Validators/index')
const router = express.Router();
//Teacher Routes
router.post('/signupT',validator.userSignupValidator,Auth.signupT);
router.post('/signinT',Auth.signinT);
router.get('/signoutT',Auth.signoutT);

//Student Routes
router.post('/signupS',validator.userSignupValidator,Auth.signupS);
router.post('/signinS',Auth.signinS);
router.get('/signoutS',Auth.signoutS);
module.exports = router
