const router = require("express").Router();
const workoutData = require("../models/workouts.js");


//save workouts after they've been completed
router.post("/api/workout", ({ body }, res) => {
    workoutData.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//pull last workout if applicable
router.get('/api/workouts', (req, res) => {
    console.log("workutData", workoutData);
    workoutData.find({}).sort({ day: -1 })
        .find((err, data) => {
            console.log("get route")
            console.log(data[0]);
            res.json(data)
        })

});



router.put("/api/workouts:id", ({ body, params }, res) => {
    console.log(body)
    workoutData.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },

        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
module.exports = router