var mongoose = require("mongoose");
var TestSchema = new mongoose.Schema({
  Title: {
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
    default: "Medium",
  },

  Status: {
    type: String,
  },

  Completed: {
    type: Boolean,
    default: false,
  },

  Comments: {
    type: String,
  },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },

  DeadlineDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Test", TestSchema);
