const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  //create schema for mongoose
  day: {
    type: Date, 
    default: Date.now
  },
  exercises: {
    type: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
},

});

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;

