const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const students = new Schema(
  {
    name: String,
    age: Number,
    marks: Object,
    class: String,
    dob:String,
    blood:String,
    fatherName:String,
    motherName:String,
    healthIssue:String,
    studentEmail:String,
    password:String

  },
  {
    timestamps: {
      createdAt: "createdAt", // customize the field name if needed
    },
  }
);

const Students = mongoose.model("students", students);
module.exports = Students;
