const express = require("express");
// native method to call api with node
const https = require("https");
const app = express();

app.get("/", function(req, res){
  // const to hold the url
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Rialto&appid=6d0e27a1bde81971c768423d4c6f86f7&units=imperial"
  https.get(url, function(response){
    console.log(response);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const feelsLike = weatherData.main.feels_like;
      console.log(feelsLike);
    })
  })
  res.send("Server is up and running");
})












app.listen(3000, function(){
  console.log("Running on port 3000");
})
