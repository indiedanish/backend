var mongoose = require("mongoose");
var BugsSchema = new mongoose.Schema({


  Task: [{
    type: mongoose.Schema.ObjectId,
    ref: "Test",
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

module.exports = mongoose.model("Bugs", BugsSchema);
