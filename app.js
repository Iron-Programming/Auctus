const express = require("express");         // Required to run express
const app = express();                      // Creating express object
const request = require("request");
const bodyParser = require("body-parser");  // For parsing JSON data
const https = require("https");             // For making https requests
const mongoose = require("mongoose");       // Setting up Mongoose DB

app.use(express.static("public"));          // Public folder that hold all of our static resources.  The server pulls from this.

/////////////////////////////////////////////////////////////////////////////////////////
                    ////// Database Setup(Mongoose) \\\\\\
/////////////////////////////////////////////////////////////////////////////////////////

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});        // Connecting the database(localhost for now)

// const auctusSchema = {               // Creating the Schema
//   name: String
// };
//
// const Item = mongoose.model("Item", itemsSchema);     // Creating the model
//
// const item1 = new Item ({                             // Creating documents
//   name: "Bob"
// });
//
//
// const defaultItems = [item1, item2, item3];
//
// Item.insertMany(defaultItems, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully added documents to database!");
//   }
// });


/////////////////////////////////////////////////////////////////////////////////////////

app.get("/", function(req, res){            // get function that takes you to the home page
  res.sendFile(__dirname + "/index.html");
});

/////////////////////////////////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 3000, function(){
  console.log("The server is up and running on localhost:3000 and is also set up for heroku");      // Server function
});
