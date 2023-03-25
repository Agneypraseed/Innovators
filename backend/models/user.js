const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, ""],
  },
  total_points: {
    type: Number,
    required: [true, ""],
  },
});

const User = mongoose.model("user_collection", UserSchema);

module.exports = User;
