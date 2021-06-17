const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: true,
        enum: ["resistance", "cardio"],
      },
      name: {
        type: String,
        trim: true,
        required: true,
      },
      duration: {
        type: Number,
        trim: true,
        required: true,
      },
      weight: {
        type: Number,
        trim: true,
        required: false,
      },
      reps: {
        type: Number,
        trim: true,
        required: false,
      },
      sets: {
        type: Number,
        trim: true,
        required: false,
      },
      distance: {
        type: Number,
        trim: true,
        required: false,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;