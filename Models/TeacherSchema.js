var mongoose = require("mongoose");
var TeacherSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Teacher", TeacherSchema);
