const express = require ('express')

const router = express.Router();

const userController=require('./controller')



// router.get('/', userController.getAllPhoneProducts);
// router.get('/classroom', userController.GetClassroomList);
// router.get('/classroom/:id', userController.GetClassroomData);
// router.post('/', userController.AddClassRoom);


router.get('/', userController.GetStudentList);
router.get('/:id', userController.GetStudentData);
router.post('/', userController.AddStudent);
router.patch('/:id', userController.EditStudent);


module.exports = router;
