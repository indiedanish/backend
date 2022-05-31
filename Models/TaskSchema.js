var mongoose = require("mongoose");
var TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Assign: {
    type: mongoose.Schema.ObjectId,
    ref: "Student",
    required: true,
  },

  AssignStudentName: {
    type: String,
    required: true,
  },
  Priority: {
    type: String,
    required: true,
  },

  Status: {
    type: Boolean,
    default: false,
  },
  Comments: {
    type: String,
    default: null,
  },
  end: {
    type: Date,
    default: Date.now,
  },

  start: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
