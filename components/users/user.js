// const router=require('express').Router
const express = require('express');

const router = express.Router();

// const Users=require('../../modals/user.modal')

const userController=require('../users/controller')



router.get('/', userController.getAllUsers);
router.post('/register', userController.signUpUsers);
router.post('/login', userController.loginUser);
router.post('/home', userController.loginUser);




module.exports = router;
