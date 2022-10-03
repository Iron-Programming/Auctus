const express = require("express");         // Required to run express
const app = express();                      // Creating express object
const request = require("request");
const bodyParser = require("body-parser");  // For parsing JSON data
const https = require("https");             // For making https requests













app.listen(process.env.PORT || 3000, function(){
  console.log("The server is up and running on localhost:3000 and is also set up for heroku");      // Server function
});
