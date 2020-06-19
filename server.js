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
db.once('open', () => console.log("connected to mongo"));
db.on('error', console.error.bind(console, 'connection error:'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});