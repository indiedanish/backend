var mongoose = require("mongoose");
var StudentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  RegNo: {
    type: String,
    required: true,
    unique: true,
  },


  Position: {
    type: String,
    required: true,

  },
  Gender:{
    type: Boolean,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Role: {
    type: String,
    required: true,
  },
  FypStatus: {
    type: String,
    required: true,
  },
  CommitteeRemarks: {
    Presentation: {type: String},
    TechnicalKnowledge: {type: String},
    Communication: {type: String},
    Documentation: {type: String},
  },
  SupervisorRemarks: {
    Presentation: {type: String},
    TechnicalKnowledge: {type: String},
    Communication: {type: String},
    Documentation: {type: String},
  },
  OnlineStatus: {
    type: Boolean,
    
  }
});

module.exports = mongoose.model("Student", StudentSchema);
