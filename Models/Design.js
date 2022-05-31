var mongoose = require("mongoose");
var DesignSchema = new mongoose.Schema({
  Files: [
    {
      type: String,
    },
  ],

  Status: {
    type: String,
  },
});

module.exports = mongoose.model("Design", DesignSchema);
