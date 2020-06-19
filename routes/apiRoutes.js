const db = require("../models/workouts");

module.exports = (app) => {

    // app.get("/", (req, res) => {
    //     res.send(index.html);
    // });

    app.get("/api/workouts", (req, res) => {
        db.find({}).then((data) => {
            res.json(data);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then((data) => {
            res.json(data);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.updateOne(
            { _id: req.params.id },
            { workouts: [req.body] })
            .catch((err) => {
                console.log(err)
            })
            .then((updatedData) => {
                res.json(updatedData);
            });
    });

    app.post("/api/exercises", (req, res) => {
        db.Workout.create(req.body)
            .then(newdata => {
                console.log(newdata + "post newdata ");
                res.json(newdata);
            })
            .catch(({ message }) => {
                console.log(message);
            });
    });
};