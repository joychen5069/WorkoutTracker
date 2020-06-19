const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models/workouts");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('open', () => console.log("connected to mongo"));

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  
];


app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

Workout.create(workoutSeed)
  .then(workout => {
    console.log(workout);
  })
  .catch(({ message }) => {
    console.log(message);
  });
  app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});