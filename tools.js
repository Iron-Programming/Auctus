"use strict";

/*
    File: tools.js
    Description: Provides general JS tools for all the pages, 
                 such as for scene management purposes
    Autors: Nathan Cochran & Oren Kirchoff
    Date: 2022-09-11
*/

/** Pretend Database 
 * We will use access the real database once
 * that is created.
**/
var users = {
    "205712@mail.macc.edu" : {
        password : "password",
        displayName: "Nathan",
        profilePicture: "ExampleUser/ProfilePic.png"
    }
};

var loggedin = false,
    user = users["205712@mail.macc.edu"];

// manage logged in users
if (loggedin) {
    var elements = document.getElementsByClassName("logged-out");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    var accountName = document.querySelectorAll("header .display-name");
    for (var i = 0; i < accountName.length; i++) {
        accountName[i].textContent = user.displayName;
    }
} else {
    var elements = document.getElementsByClassName("logged-in");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}
 
/******************************************** 
 * Date Functions
*********************************************/
function addHours(numOfHours, date) {
    date = date || new Date();
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

    return date;
}

/******************************************** 
 * @functionhandleHeaderPopup handles the header popup when you click on your account name
 * @function clearHeaderPopup clears the popup when you click somewhere in the body
*********************************************/
function handleHeaderPopup() {
    var popup = document.getElementsByClassName("headerPopup");
    setTimeout(function() {
        for (var i = 0; i < popup.length; i++) {
            if (popup[i].classList.contains("addHeaderPopup")) {
                popup[i].classList.add("removeHeaderPopup");
                popup[i].classList.remove("addHeaderPopup");
            } else {
                popup[i].classList.remove("removeHeaderPopup");
                popup[i].classList.add("addHeaderPopup");
            }
        } 
    }, 25);
}

function clearHeaderPopup() {
    var popup = document.getElementsByClassName("headerPopup");
    for (var i = 0; i < popup.length; i++) {
        popup[i].classList.add("removeHeaderPopup");
        popup[i].classList.remove("addHeaderPopup");
    }
}
clearHeaderPopup();

// clear header when clicking anywhere else
const box = document.querySelector(".account-icon-container")
document.addEventListener("click", function(event) {
  if (event.target.closest(".account-icon-container")) { return }
  clearHeaderPopup();
})


/** 
 * function resolveSignin()
 * Credentials are either successful (send user to their profile), or incorrent (give error message)
 * username is email in this case
*/
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
        alert("login successful")
        window.location.href = "yourprofile.html";
    
    // #2 --> username found but password does not match
    } else if (found) {
        var messages = document.getElementsByClassName('no-match');
        messages[0].style.display = "block";
        messages[1].style.display = "block";
        messages[0].style.animation = "shake 0.5s";
        messages[1].style.animation = "shake 0.5s";
    // #3 --> username does not exist
    } else {
        var messages = document.getElementsByClassName('no-account');
        messages[0].style.display = "block";
        messages[0].style.animation = "shake 0.5s";
    }
}

/** 
 * function resolveSignup()
 * 
*/
function resolvesSignup() {
    
}