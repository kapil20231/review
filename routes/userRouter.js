const express=  require('express');
const router = express.Router()
const user = require('../controller/userController')
//router.post('/registeruser',user.userSignup)
router.post('/registeruser', user.usersignup);
module.exports=router;