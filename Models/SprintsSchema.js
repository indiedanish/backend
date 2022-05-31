var mongoose = require("mongoose");
var SprintsSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },

  Task: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Task",
    },
  ],

  Start: {
    type: Date,
    default: Date.now,
  },

  End: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Sprints", SprintsSchema);
