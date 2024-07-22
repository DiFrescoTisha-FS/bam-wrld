// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  photoURL: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
