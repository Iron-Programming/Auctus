const express = require("express");         // Required to run express
const app = express();                      // Creating express object
const request = require("request");
const bodyParser = require("body-parser");  // For parsing JSON data
const https = require("https");             // For making https requests

app.use(express.static("public"));          // We will need to create a "public" folder and place all of our css, js, and images
                                            // into it so our server can pull our static resources from one place.

app.get("/", function(req, res){            // get function that takes you to the home page
  res.sendFile(__dirname + "/index.html");
});









app.listen(process.env.PORT || 3000, function(){
  console.log("The server is up and running on localhost:3000 and is also set up for heroku");      // Server function
});
