const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    required: "Workout Type is Required",
    },
  name: {
    type: String,
    trim: true,
    },
  duration: {
    type: Number,
    trim: true,
    },
  weight: {
    type: Number,
    trim: true,
    },
  reps: {
    type: Number,
    trim: true,
    },
  sets: {
    type: Number,
    trim: true,
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
