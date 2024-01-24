const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courses = new Schema({
  courseName:String,
  description:String,
  coursePeriod:Number
});

const Courses = mongoose.model("courses", courses);
module.exports = Courses;