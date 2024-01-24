const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendence = new Schema({
  studentId:String,
  date:Date,
  reason:String,
  present:{
    first_off:Boolean,
    second_off:Boolean,
  },
  absence:Boolean,
  od:Boolean
});

const Attendence = mongoose.model("attendence", attendence);
module.exports = Attendence;