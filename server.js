const express = require('express');
const request = require('request');

const app = express();

app.get('/', (req, res) => {
    let city = req.query.city;
    var request = require('request');
    request(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=679ca9b9d79a1e404cc1cd756e5c4aec`,
        function (error, response, body) {
            let data = JSON.parse(body);
            if (response.statusCode === 200) {
                res.send(`The weather in your city "${city}" is ${data.weather[0].description}`);
            }
        }
    );
});

app.listen(5500, () => console.log('Server started on port 3000'));