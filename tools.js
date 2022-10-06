"use strict";

/*
    File: tools.js
    Description: Provides general JS tools for all the pages, 
                 such as for scene management purposes
    Autors: Nathan Cochran & Oren Kirchoff
    Date: 2022-09-11
*/

/** Pretend Database **/
var users = {
    "205712@mail.macc.edu" : {
        password : "password"

    }
};

function resolveSignin() {
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    var found = false;

    // 1. Search User Database
    Object.keys(users).forEach(function(key) {
        if (username === key && password == users[key].password) {
            found = true;
            return;
        }
    });

    // 2. Handle login
    if (found) {
        
    } else {

    }
}