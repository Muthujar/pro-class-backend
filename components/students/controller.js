const Classroom = require("../../modals/classroom.modal");
const Students = require("../../modals/students.modal");
const { signUpUsers } = require("../users/controller");

module.exports = {
  AddClassRoom: async (req, res, next) => {
    console.log(req);
    let body = req.body;
    console.log(body);
    if (!body || !body.class || !body.teacher || !body.capacity) {
      return res.send("body error ");
    }

    try {
      const results = await Classroom.create(body);

      console.log("ff", results);

      res.send("classroom created");
    } catch (error) {
      console.log(error.message);
    }
  },

  GetClassroomList: async (req, res, next) => {
    console.log(req);
    let body = req.body;
    console.log(body);

    try {
      const results = await Classroom.find();

      console.log("ff", results);

      res.send("classroom List");
    } catch (error) {
      console.log(error.message);
    }
  },

  GetClassroomData: async (req, res, next) => {
    console.log(req);
    let params = req.params.id;

    try {
      const results = await Classroom.find({ _id: params });

      console.log("ff");

      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  AddStudent: async (req, res, next) => {
    console.log(req);
    let body = req.body;
    console.log(body);

    if (!body || !body.name || !body.dob || !body.class) {



      return res.send("poda dei");
    }

    try {

      body["password"]='welcome123'
      body["studentEmail"]=`${body.name}@proclass.com`
      body["type"]='student'

      const results = await Students.create(body);
      body["username"]=body.studentEmail
      res.status(202).send({ message: "Students Created", data: results });
       await signUpUsers(req,res,body.type)



    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  EditStudent: async (req, res, next) => {
    let body = req.body;
    let params = req.params.id;

    if (!body) {
      return res.send("error");
    }
    console.log(body);

    try {
      const results = await Students.findOneAndUpdate({ _id: params }, body, {
        new: true,
      });

      res.send({
        results,
        message: "Students Updated",
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  GetStudentList: async (req, res, next) => {
    console.log(req);
    let body = req.body;
    console.log(body);
    let query = req.query?.type
    console.log(query, "query");

    try {
      if (query === "") {
        const results = await Students.find();

        console.log(results);

        results.map((list) => {
          console.log(list);
          // Obj.values(list.marks).map((item,i) => {
          //   i / item.length;
          // });

          const totalMarks = Object.values(list.marks).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
          const averageMarks = totalMarks / Object.values(list.marks).length;
        });
        list.average = averageMarks;

        res.send(results);
      } else if (query === "student") {
        console.log('sti====');
        const results = await Students.find({


    // $lte:{age:18
    //     }
      },{
          // student_id: "$_id",
          name:1
        });
        console.log("ff");

        res.send(results);
      } else {
        const results = await Students.find();

        console.log("ff");

        res.send(results);
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  GetStudentData: async (req, res, next) => {
    console.log(req);
    let params = req.params.id;

    try {
      const results = await Students.find({ _id: params });

      console.log("ff");

      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  DeleteStudentData: async (req, res, next) => {
    console.log(req);
    let params = req.params.id;

    try {
      const results = await Students.deleteOne({ _id: params });

      console.log("ff");

      res.send("Deleted");
    } catch (error) {
      console.log(error.message);
    }
  },
};
