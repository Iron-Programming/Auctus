const express = require("express"); // Required to run express
const app = express(); // Creating express object
const request = require("request");
const bodyParser = require("body-parser"); // For parsing JSON data
const https = require("https"); // For making https requests
const mongoose = require("mongoose"); // Setting up Mongoose DB
const encrypt = require("mongoose-encryption");  // Setting up database encryption


app.use(express.static("public")); // Public folder that hold all of our static resources.  The server pulls from this.
app.use(bodyParser.urlencoded({
  extended: true
}));

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

mongoose.connect("mongodb://localhost:27017/AuctusLoginDB", {useNewUrlParser: true});    // Making connection with Mongo and creating the database

const userSchema = new mongoose.Schema ({ // Creating the Schema(collection or table)
  email: String,
  password: String
});

const secret = "Thisisourlittlesecret";
userSchema.plugin(encrypt, {secret: secret, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema); // Creating new schema for database





// const item1 = new Item({ // Creating documents
//   name: "Billy"
// });
//
// const item2 = new Item({
//   name: "Bobby"
// });
//
// const item3 = new Item({
//   name: "Jimmy"
// });


// const defaultItems = [item1, item2, item3];
//
// Item.insertMany(defaultItems, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully added documents to database!");
//   }
// });


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
  const newUser = new User({
    email: req.body.email,
    password: req.body.password
  });

  newUser.save(function(err){
    if (err){
      console.log(err);
    } else {
      res.sendFile(__dirname + "/secrets.html");
    }
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
        if (foundUser.password === password){
          res.sendFile(__dirname + "/secrets.html");
        }
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
