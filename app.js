require("dotenv").config();
const express = require("express"); // Required to run express
const app = express(); // Creating express object
const request = require("request");
const bodyParser = require("body-parser"); // For parsing JSON data
const https = require("https"); // For making https requests
const mongoose = require("mongoose"); // Setting up Mongoose DB
// const md5 = require("md5");  // Setting up md5 encryption
const bcrypt = require("bcrypt");  // Setting up bcrypt for salting and hashing passwords
const saltRounds = 10;


app.use(express.static("public")); // Public folder that hold all of our static resources.  The server pulls from this.
app.use(bodyParser.urlencoded({
  extended: true
}));


/////////////////////////////////////////////////////////////////////////////////////////
////// Database Setup(Mongoose) \\\\\\
/////////////////////////////////////////////////////////////////////////////////////////

// mongoose.connect("mongodb+srv://admin-oren:Hoolibah88@cluster0.9ryp70x.mongodb.net/?retryWrites=true&w=majority", {      // Connecting the database mongoose
//   useNewUrlParser: true
// });

mongoose.connect("mongodb://localhost:27017/AuctusLoginDB", {useNewUrlParser: true});    // Making connection with Mongo and creating the database

const userSchema = new mongoose.Schema ({ // Creating the Schema(collection or table)
  email: String,
  password: String
});

// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"] });


const User = new mongoose.model("User", userSchema); // Creating new schema for database


/////////////////////////////////////////////////////////////////////////////////////////
              ///////// GET requests \\\\\\\\\\\
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

// app.get("/secrets", function(req, res){
//   res.sendFile(__dirname + "/secrets.html");
// });

/////////////////////////////////////////////////////////////////////////////////////////
                ////////// POST functions \\\\\\\\\\\
/////////////////////////////////////////////////////////////////////////////////////////

app.post("/signup", function(req, res){

  bcrypt.hash(req.body.password, saltRounds, function(err, hash){
    const newUser = new User({
      email: req.body.email,
      password: hash
    });

    newUser.save(function(err){
      if (err){
        console.log(err);
      } else {
        res.sendFile(__dirname + "/secrets.html");
      }
    });
  });
});

app.post("/signin", function(req, res){
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email:email}, function(err, foundUser){
    if (err){
      console.log(err);
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function(err, result){
          if (result === true){
              res.sendFile(__dirname + "/secrets.html");
          }
        });
      }
    }
  });
});

/////////////////////////////////////////////////////////////////////////////////////////
              ///////// Server code \\\\\\\\\\
/////////////////////////////////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 3333, function() {
  console.log("The server is up and running on localhost:3000 and is also set up for heroku"); // Server function
});
