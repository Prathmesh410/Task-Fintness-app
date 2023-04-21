const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 50,
    },
    exercises: [
      {
        type: ObjectId,
        ref: "Exercise",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Program", programSchema);