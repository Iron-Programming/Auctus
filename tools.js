"use strict";

/*
    File: tools.js
    Description: Provides general JS tools for all the pages, 
                 such as for scene management purposes
    Autors: Nathan Cochran & Oren Kirchoff
    Date: 2022-09-11
*/

function MarketItem(config) {
    // set default values
    this.name = config.name || "#Error";
    this.description = config.description || "Error Loading...";
    this.author = config.author || {};
    this.location = config.author || {};
}

MarketItem.prototype.addToMarket = function() {
    // reference parent container
    var marketContainer = document.getElementById("market-container");

    // create item div
    var itemDiv = document.createElement("div");
    itemDiv.classList.add("market-item");

    var itemTitle = document.createElement("h5");
    itemTitle.textContent = this.name;

    var descDiv = document.createElement("div");
    descDiv.classList.add("desc-div");

    var itemDesc = document.createElement("p");
    itemDesc.textContent = this.description;

    var bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottom-div");

    var locationText = document.createElement("div");
    locationText.innerHTML = "<span class='material-symbols-outlined'>location_on</span>";
    locationText.classList.add("location-text");
    locationText.innerHTML += "<span class='popup'>MO, Example</span>";

    var authorImg = document.createElement("a");
    authorImg.innerHTML = "<img class='item-author-image' src='Media/example_image.png'>";
    authorImg.href = "";

    // add child elements into itemDiv
    bottomDiv.appendChild(locationText);
    bottomDiv.appendChild(authorImg);
    descDiv.appendChild(itemDesc);
    descDiv.appendChild(bottomDiv);

    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(descDiv);

    // add market item to parent container
    marketContainer.appendChild(itemDiv);
};

var marketItems = [ ];

marketItems.push(new MarketItem({
    name: "Item Name",
    description: "This is a cool item.",
    author: {},
    location: {}
}));

for (var i = 0; i < marketItems.length; i++) {
    marketItems[i].addToMarket();
}

/** Pretend Database **/
var users = {
    "205712@mail.macc.edu" : {
        password : "password",

    }
};

function resolveSignin() {
    
}