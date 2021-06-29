const express = require('express');
const request = require('request');
const path = require("path");
const { urlencoded } = require('express');
const config = require('./config.js');


const app = express();

app.set('view engine','hbs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.render('index',{temp: "--", weather: "----", city: "---"});
    // console.log("enter in get")
    // res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.post('/', (req, res) => {

    console.log("in the city post");

    let city = req.body.city;
    console.log(city);
    var request = require('request');
    request(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.api}&units=metric`,
        function (error, response, body) {
            let data = JSON.parse(body);
            if (response.statusCode === 200) {
             
             res.render('index',{temp: `${data.main.temp}`, weather: `${data.weather[0].main}`, city: `${data.name}`});
             
                // res.send(`The weather in your city "${city}" is ${data.weather[0].main}
                //  , ${data.main.temp}, ${data.main.temp_min}, ${data.main.temp_max}, ${data.sys.country}, ${data.name}, ${data.wind.speed}, ${data.wind.deg}`);
            }
        }
    );
});

app.listen(8000, () => console.log('Server started on port 8000 '));