const express = require ('express')

const router = express.Router();

const userController=require('./controller')


router.get('/', userController.GetAttendenceList);
router.get('/:id', userController.GetAttendenceDetails);
router.post('/', userController.AddAttendence);
router.patch('/:id', userController.UpdateAttendence);



module.exports = router;