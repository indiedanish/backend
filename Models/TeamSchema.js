var mongoose = require("mongoose");
var TeamSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
  },

  Meeting: {
    type: String,
    default: "There's no meeting, today",
  },
  Student: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Student",
    },
  ],
});
module.exports = mongoose.model("Team", TeamSchema);
