var mongoose = require("mongoose");
var DeliverablesSchema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Description: {
    type: String,
  },
  Deadline: {
    type: Date,
  },
  TemplateFiles: [
    {
      type: String,
    },
  ],
  Rubrics: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Deliverables", DeliverablesSchema);
