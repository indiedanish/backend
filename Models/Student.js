var mongoose = require("mongoose");
var StudentSchema = new mongoose.Schema({
  RegNo: {
    type: String,
    required: true,
    unique: true,
  },

  Position: {
    type: String,
    required: true,
  },

  PhoneNumber: {
    type: Number,
    required: true,
  },

  FypStatus: {
    type: String,
    required: true,
  },
  CommitteeRemarks: {
    Presentation: { type: String },
    TechnicalKnowledge: { type: String },
    Communication: { type: String },
    Documentation: { type: String },
  },
  SupervisorRemarks: {
    Presentation: { type: String },
    TechnicalKnowledge: { type: String },
    Communication: { type: String },
    Documentation: { type: String },
  },
  OnlineStatus: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
