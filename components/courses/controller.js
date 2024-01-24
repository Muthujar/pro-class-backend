const Course = require("../../modals/courses.modal");




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
      const results = await Course.find().select({ __v: 0 });

      console.log("ff", results);

      res.status(202).send({ message: "Courses List", data: results });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      console.log(error.message);
    }
  },

  GetCourseDetails: async (req, res, next) => {
    console.log(req);
    let params = req.params.id;

    try {
      const results = await Course.find({ _id: params });

      console.log("ff");

      res.status(202,results);
    } catch (error) {
      console.log(error.message);
    }
  }
}