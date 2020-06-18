const path = require("path");

//create file paths for html
module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(_dirname, '..public/index.html'));
    })

    app.get('/workouts', (req, res) => {
        res.sendFile(path.join(_dirname, '..public/exercise.html'));
    })
}