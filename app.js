require("dotenv").config();
const express = require("express"); // Required to run express
const app = express(); // Creating express object
const request = require("request");
const bodyParser = require("body-parser"); // For parsing JSON data
const https = require("https"); // For making https requests
const mongoose = require("mongoose"); // Setting up Mongoose DB
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");


app.use(express.static("public")); // Public folder that hold all of our static resources.  The server pulls from this.
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: "The little secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());     // Create Passport Session

/////////////////////////////////////////////////////////////////////////////////////////
////// Database Setup(Mongoose) \\\\\\
/////////////////////////////////////////////////////////////////////////////////////////

//mongoose.createConnection("mongodb://localhost:27017/AuctusLoginDB", {useNewUrlParser: true});    // Making connection with Mongo and creating the database

mongoose.connect("mongodb+srv://admin-oren:Auctus2022@cluster0.9ryp70x.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true});

const userSchema = new mongoose.Schema ({ // Creating the Schema(collection or table)
  email: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);   // Enable passport plugin for encrypting Database

// userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"] });


const User = new mongoose.model("User", userSchema); // Creating new schema for database

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());       // Serialize and deserialize session cookies
passport.deserializeUser(User.deserializeUser());

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

app.get("/documentation", function(req, res) {
  res.sendFile(__dirname + "/documentation.html");
  //res.render("/documentation");
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

app.get("/secrets", function(req, res){
  if (req.isAuthenticated()){
    res.sendFile(__dirname + "/secrets.html");
    //res.redirect("/secrets");
  } else {
    res.sendFile(__dirname + "/signin.html");
  //res.redirect("/signin");
  }

});

/////////////////////////////////////////////////////////////////////////////////////////
                ////////// POST functions \\\\\\\\\\\
/////////////////////////////////////////////////////////////////////////////////////////

app.post("/signup", function(req, res){

  User.register({username: req.body.username}, req.body.password, function(err, user){
    if (err) {
      console.log(err);
      res.redirect("/signup");
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets");
      });
    }
  });

});



app.post("/signin", function(req, res){

  const user = new User({
  username: req.body.username,
  password: req.body.password
});
  req.login(user, function(err){
    if (err){
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/secrets");
      });
    }
  });

});





/////////////////////////////////////////////////////////////////////////////////////////
              ///////// Server code \\\\\\\\\\
/////////////////////////////////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 3000, function() {
  console.log("The server is up and running on localhost:3000 and is also set up for heroku"); // Server function
});
