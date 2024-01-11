const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classroom = new Schema({
  class: String,
  teacher: String,
  capacity: Number,
});

const Classroom = mongoose.model("classroom", classroom);
module.exports = Classroom;
