const express = require("express");
// native method to call api with node
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){
  // var to hold the query city
  const query = req.body.cityName;
  // var to hold appid
  const apiKey = "6d0e27a1bde81971c768423d4c6f86f7";
  // var to hold units
  const units = "imperial";
  // const to hold the url
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;
  https.get(url, function(response){
    console.log(response);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      // variable to hold icon
      const icon = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+".png"
      // console.log(weatherDescription);
      const feelsLike = weatherData.main.feels_like;
      // console.log(feelsLike);
      res.write("<h1>The Temperature in "+ query+ " is "+ temp + " degrees Farenheit</h1>");
      res.write("<h2>Today calls for "+weatherDescription+ "</h2>")
      res.write("<img id=wicon src="+icon+" alt=Weather icon>");
      res.end();
    })


  })
});

// // var to hold the query city
// const query = "Rialto";
// // var to hold appid
// const apiKey = "6d0e27a1bde81971c768423d4c6f86f7";
// // var to hold units
// const units = "imperial";
// // const to hold the url
// const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+units;
// https.get(url, function(response){
//   console.log(response);
//
//   response.on("data", function(data){
//     const weatherData = JSON.parse(data);
//     const temp = weatherData.main.temp;
//     const weatherDescription = weatherData.weather[0].description;
//     // variable to hold icon
//     const icon = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+".png"
//     // console.log(weatherDescription);
//     const feelsLike = weatherData.main.feels_like;
//     // console.log(feelsLike);
//     res.write("<h1>The Temperature in Rialto is "+ temp + " degrees Farenheit</h1>");
//     res.write("<h2>Today calls for "+weatherDescription+ "</h2>")
//     res.write("<img id=wicon src="+icon+" alt=Weather icon>");
//     res.end();
//   })
//
//
// })










app.listen(3000, function(){
  console.log("Running on port 3000");
})
