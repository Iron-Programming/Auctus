"use strict";

/*
    File: tools.js
    Description: Provides general JS tools for all the pages, 
                 such as for scene management purposes
    Autors: Nathan Cochran & Oren Kirchoff
    Date: 2022-09-11
*/



/** Update HTML if user is logged in **/
if (localStorage.loggedin) {
    alert('User logged in')
}

/** Pretend Database **/
var users = {
    "205712@mail.macc.edu" : {
        password : "password",
        displayName: "Nathan Cochran",
        profilePicture: "ExampleUser/ProfilePic.png"
    }
};

// @function resolveSignin()
// Credentials are either successful (send user to their profile), or incorrent (give error message)
// username is email in this case
function resolveSignin() {
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    var found = false, match = false;

    // 1. Search User Database
    Object.keys(users).forEach(function(key) {
        if (username === key) {
            found = true;
            match = (password == users[key].password) ? true : false;
            return;
        }
    });

    // 2. Handle login
    // #1 --> username 
    var messages = document.getElementsByClassName('no-match');
    messages[0].style.display = "none";
    messages[1].style.display = "none";
    var messages = document.getElementsByClassName('no-account');
    messages[0].style.display = "none";
    if (found && match) {
        // update login status
        localStorage.loggedin = true;

        // sign in user
        if (localStorage.user) {
           localStorage.removeItem("user");
        }
        localStorage.setItem("user", JSON.stringify(users[username]));
        window.location.href = "yourprofile.html";
    } else if (found) {
        var messages = document.getElementsByClassName('no-match');
        messages[0].style.display = "block";
        messages[1].style.display = "block";
        messages[0].style.animation = "shake 0.5s";
        messages[1].style.animation = "shake 0.5s";
    } else {
        var messages = document.getElementsByClassName('no-account');
        messages[0].style.display = "block";
        messages[0].style.animation = "shake 0.5s";
    }
}