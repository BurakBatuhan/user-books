const mongoose = require("mongoose");
const { Schema } = mongoose;
const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    creator: { type: Schema.Types.ObjectId, ref: "Auth" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
