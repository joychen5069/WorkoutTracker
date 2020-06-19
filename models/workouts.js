const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //set date for exercises
    day: {
        type: Date,
        required: true,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "Enter exercise"
        },

        name: {
            type: String,
            required: "Enter the name of the exercise"
        },

        duration: {
            type: Number,
            required: "Enter the duration of the exercise"
        },

        weight: {
            type: Number,
            required: "Enter the weight"
        },

        reps: {
            type: Number,
            required: "Enter the amount of reps"
        },

        sets: {
            type: Number,
            required: "Enter the amount of sets"
        }
    }]
})


const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;
