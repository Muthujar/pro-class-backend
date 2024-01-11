const express = require('express');
const router = express.Router();
const Users=require('../../modals/user.modal')



const userController=require('../signup/controller')



router.post('/', userController.signUpUsers);



module.exports = router;