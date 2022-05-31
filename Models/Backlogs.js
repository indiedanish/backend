var mongoose = require("mongoose");
var BacklogSchema = new mongoose.Schema({


  Task: [{
    type: mongoose.Schema.ObjectId,
    ref: "Task",
  }],

    Start: {
    type: Date,
    default: Date.now,
    },

    End: {
    type: Date,
    default: Date.now,
    },

    
});

module.exports = mongoose.model("Backlog", BacklogSchema);
