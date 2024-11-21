const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[6789]\d{9}$/.test(v);
      },
      message:
        "Phone number must start with 6, 7, 8, or 9 and be 10 digits long.",
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
  },
});
module.exports = mongoose.model("User", userSchema);
