const router = require("express").Router();
const workoutData = require("../models/workouts.js");

    //pull last workout if applicable
    router.get('/api/workouts', (req, res) => {
        workoutData.find({}).sort({ day: -1 })
            .find((err, post) => {
                console.log("get route")
                console.log(post[0]);
                res.json(post)
            })

    });

    ;

    //save workouts after they've been completed
    // app.post('/api/workouts', (req, res) => {
    //     const workout = req.params;
    //     console.log('workout', workout)
    // });

    router.post("/api/workout", ({body}, res) => {
        Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
module.exports = router