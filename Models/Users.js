var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  Name: {
    type: String,
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
  Gender: {
    type: Boolean,
    required: true,
    unique: true,
  },

  Role: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
