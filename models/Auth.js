const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model("Auth", AuthSchema);

module.exports = Auth;
