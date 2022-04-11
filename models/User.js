const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Auth" },
    books: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
