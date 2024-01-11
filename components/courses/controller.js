const Course = require("../../modals/course.modal");




module.exports = {


AddCourse: async (req, res, next) => {
    console.log(req);
    let body = req.body;
    console.log(body);
    if (!body || !body.courseName || !body.description || !body.coursePeriod) {
      return res.send("body error ");
    }

    try {
      const results = await Course.create(body);

      console.log("ff", results);

      res.send("course created");
    } catch (error) {
      console.log(error.message);
    }
  },

  GetCourseList: async (req, res, next) => {
    console.log(req);
    let body = req.body;
    console.log(body);

    try {
      const results = await Course.find();

      console.log("ff", results);

      res.send("courses List");
    } catch (error) {
      console.log(error.message);
    }
  },

  GetCourseDetails: async (req, res, next) => {
    console.log(req);
    let params = req.params.id;

    try {
      const results = await Course.find({ _id: params });

      console.log("ff");

      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  }
}