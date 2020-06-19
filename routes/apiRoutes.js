const workoutData = require("../models/workouts")

const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    //pull last workout if applicable
    app.get('/api/workouts', (req, res) => {
        workoutData.find({}).sort({ day: -1 })
            .then((err, post) => {
                console.log("get route")
                console.log(post);
                res.json(post)
            })

    });

    ;

    //save workouts after they've been completed
    app.post('/api/workouts', (req, res) => {
        const workout = req.params;
        console.log('workout', workout)
    });

    app.put('/api/workouts', (req, res) => {
        const workout = req.body;
        console.log('workout', workout);

        workoutData.create(workout).then(data => {
            res.json(data)
        })
    })
}