"use strict";

/*
    File: tools.js
    Description: Provides general JS tools for all the pages, 
                 such as for scene management purposes
    Autors: Nathan Cochran & Oren Kirchoff
    Date: 2022-09-11
*/

Cookies.set('cookie_name', 'cookie_value', { expires: 365 });
var cookieValue = Cookies.get('cookie_name'); // => 'value'
alert(cookieValue);
Cookies.remove('cookie_name');

/** Pretend Database 
 * We will use access the real database once
 * that is created.
**/
var users = {
    "205712@mail.macc.edu" : {
        password : "password",
        displayName: "Nathan Cochran",
        profilePicture: "ExampleUser/ProfilePic.png"
    }
};

/******************************************** 
 * Cookie Functions (Credit to w3schools)
*********************************************/
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
 * Mangage cookies
 * Provides login functionality
*********************************************/

/** Update HTML if user is logged in **/
setCookie("uid", "test", 100000000);
var userid = getCookie("uid");
if (uid !== "") {
    alert("User Logged in successfully!")
}

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
        setCookie("uid", username, 1);
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