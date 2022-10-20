const express = require("express"); // Required to run express
const app = express(); // Creating express object
const request = require("request");
const bodyParser = require("body-parser"); // For parsing JSON data
const https = require("https"); // For making https requests
const mongoose = require("mongoose"); // Setting up Mongoose DB
var mongo = require('mongodb');

app.use(express.static("public")); // Public folder that hold all of our static resources.  The server pulls from this.

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

// mongoose.connect("mongodb+srv://admin-oren:Hoolibah88@cluster0.9ryp70x.mongodb.net/?retryWrites=true&w=majority", {      // Connecting the database mongoose
//   useNewUrlParser: true
// });

mongoose.connect("mongodb://localhost:27017/Logins", {
  useNewUrlParser: true
});

const namesSchema = { // Creating the Schema
  name: String
};

const Item = mongoose.model("Item", namesSchema); // Creating the model

const item1 = new Item({ // Creating documents
  name: "Billy"
});

const item2 = new Item({
  name: "Bobby"
});

const item3 = new Item({
  name: "Jimmy"
});


const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully added documents to database!");
  }
});


/////////////////////////////////////////////////////////////////////////////////////////

app.get("/", function(req, res) { // get function that takes you to the home page
  res.sendFile(__dirname + "/index.html");
});

app.get("/signin", function(req, res) {
  res.sendFile(__dirname + "/signin.html");
  // res.send("signin");
});

app.get("/signup", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.get("/termsofuse", function(req, res) {
  res.sendFile(__dirname + "/termsofuse.html");
});

app.get("/privacypolicy", function(req, res) {
  res.sendFile(__dirname + "/privacypolicy.html");
});

app.get("/documentation", function(req, res) { // CSS not loading
  res.sendFile(__dirname + "/documentation.html");
});

app.get("/account", function(req, res) {
  res.sendFile(__dirname + "/account.html");
});

app.get("/marketplace", function(req, res) { // CSS not loading
  res.sendFile(__dirname + "/marketplace.html");
});

app.get("/yourprofile", function(req, res) {
  res.sendFile(__dirname + "/yourprofile.html");
});

app.get("/dashboard", function(req, res) {
  res.sendFile(__dirname + "/dashboard.html");
});

// app.get("/yourprofile", function(req, res){
//   res.sendFile(__dirname + "/yourprofile.html");
// });

/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 3000, function() {
  console.log("The server is up and running on localhost:3000 and is also set up for heroku"); // Server function
});
