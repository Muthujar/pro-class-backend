const Attendence = require("../../modals/attendence.modal");




module.exports = {


    AddAttendence: async (req, res, next) => {
    console.log(req);
    let body = req.body;
    console.log(body);
    if (!body || !body.studentId || !body.date || !body.present) {
      return res.send("body error ");
    }

    try {
        body["date"]=new Date(body.date)
      const results = await Attendence.create(body);

      console.log("ff", results);

      res.send("attendence added");
    } catch (error) {
      console.log(error.message);
    }
  },

  UpdateAttendence: async (req, res, next) => {
    console.log(req);
    let body = req.body;
    console.log(body);
    if (!body || !body.studentId || !body.date || !body.present) {
      return res.send("body error ");
    }

    try {
        body["date"]=new Date(body.date)
      const results = await Attendence.create(body);

      console.log("ff", results);

      res.send("attendence added");
    } catch (error) {
      console.log(error.message);
    }
  },


  GetAttendenceList: async (req, res, next) => {
    console.log(req);
    let body = req.body; 
    console.log(body);
    let query=req.query

    try {
      const results = await Attendence.find({date:query.date}).select({ __v: 0 });

      res.status(202).send({ message: "attendence List", data: results });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
      console.log(error.message);
    }
  },

  GetAttendenceDetails: async (req, res, next) => {
    console.log(req);
    let params = req.params.id;

    try {
      const results = await Attendence.find({ _id: params });

      console.log("ff");

      res.status(202,results);
    } catch (error) {
      console.log(error.message);
    }
  }



}