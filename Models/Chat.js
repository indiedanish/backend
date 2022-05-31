var mongoose = require("mongoose");
var ChatSchema = new mongoose.Schema({
  Sender: [
    {
      Role: {
        type: String,
      },
      ID: {
        type: String,
      },
    },
  ],
  Receiver: [
    {
      Role: {
        type: String,
      },
      ID: {
        type: String,
      },
    },
  ],
  Message: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", ChatSchema);
