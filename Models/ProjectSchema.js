var mongoose = require("mongoose");
var ProjectSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },

  Description: {
    type: String,
    default: null,
  },
  Team: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Student",
    },
  ],
  Supervisor: {
    type: mongoose.Schema.ObjectId,
    ref: "Teacher",
  },
  Files: {
    type: Buffer,
  },
  CreatedDate: {
    type: Date,
    default: Date.now,
  },
  Marks: {
    //Average of aa students marks
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
