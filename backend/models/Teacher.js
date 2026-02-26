const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  mobile: String,
  address: String,
  profilePic: String,
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Teacher", teacherSchema);