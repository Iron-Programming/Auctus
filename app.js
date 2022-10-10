const express = require("express");         // Required to run express
const app = express();                      // Creating express object
const request = require("request");
const bodyParser = require("body-parser");  // For parsing JSON data
const https = require("https");             // For making https requests
const mongoose = require("mongoose");       // Setting up Mongoose DB

app.use(express.static("public"));          // Public folder that hold all of our static resources.  The server pulls from this.

/////////////////////////////////////////////////////////////////////////////////////////

//app.use("/", require("./routes.index"));

const router = express.Router();
//
// router.get("/termsofuse", function(req, res){
//   res.send("Terms of use page");
// });
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

app.get("/signin", function(req, res){
  res.sendFile(__dirname + "/signin.html");
  // res.send("signin");
});

app.get("/signup", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.get("/termsofuse", function(req, res){
  res.sendFile(__dirname + "/termsofuse.html");
});

app.get("/privacypolicy", function(req, res){
  res.sendFile(__dirname + "/privacypolicy.html");
});

app.get("/about", function(req, res){                 // CSS not loading
  res.sendFile(__dirname + "/about.html");
});

app.get("/account", function(req, res){
  res.sendFile(__dirname + "/account.html");
});

app.get("/marketplace", function(req, res){           // CSS not loading
  res.sendFile(__dirname + "/marketplace.html");
});

app.get("/yourprofile", function(req, res){
  res.sendFile(__dirname + "/yourprofile.html");
});

/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 3000, function(){
  console.log("The server is up and running on localhost:3000 and is also set up for heroku");      // Server function
});
