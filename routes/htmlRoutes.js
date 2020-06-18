const path = require("path");

//create file paths for html
module.exports = (app) => {
    app.get('/workouts', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};