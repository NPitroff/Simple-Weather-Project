const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Server is up and running");
})












app.listen(3000, function(){
  console.log("Running on port 3000");
})
