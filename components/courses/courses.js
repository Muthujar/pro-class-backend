const express = require ('express')

const router = express.Router();

const userController=require('./controller')



router.get('/', userController.GetCourseList);
router.get('/:id', userController.GetCourseDetails);
router.post('/', userController.AddCourse);

// router.post('/', userController.AddClassRoom);


// router.get('/student', userController.GetStudentList);
// router.get('/student/:id', userController.GetStudentData);
// router.post('/student', userController.AddStudent);
// router.patch('/student/:id', userController.EditStudent);


module.exports = router;