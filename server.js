const express = require('express');
const request = require('request');
const path = require("path");
const { urlencoded } = require('express');
const config = require('./config.js');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    console.log("enter in get")
    res.sendFile(path.join(__dirname + 'public/index.html'));


});

app.post('/', (req, res) => {

    console.log("in the city post");

    let city = req.body.city;
    console.log(city);
    // console.log(config.api);
    var request = require('request');
    request(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.api}&units=metric`,
        function (error, response, body) {
            let data = JSON.parse(body);
            if (response.statusCode === 200) {
                res.send(`The weather in your city "${city}" is ${data.weather[0].description}
                , ${data.main.temp}, ${data.main.temp_min}, ${data.main.temp_max}, ${data.sys.country}, ${data.name}, ${data.wind.speed}, ${data.wind.deg}
                `);
            }
        }
    );
});

app.listen(8000, () => console.log('Server started on port 8000 '));