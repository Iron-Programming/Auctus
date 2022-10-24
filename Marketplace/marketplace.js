function MarketItem(config) {
    // set default values
    this.name = config.name || "#Error";
    this.description = config.description || "Error Loading...";
    this.author = config.author || {};
    this.location = config.author || {};
}

MarketItem.prototype.addToMarket = function(marketID) {
    // reference parent container
    var marketContainer = document.getElementById(marketID);

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

    var goArrow = document.createElement("div");
    goArrow.innerHTML = "<span class='material-symbols-outlined'>outbound</span>";
    goArrow.classList.add("go-arrow");

    var authorImg = document.createElement("a");
    authorImg.innerHTML = "<img class='item-author-image' src='Media/example_image.png'>";
    authorImg.href = "";

    // add child elements into itemDiv
    bottomDiv.appendChild(goArrow);
    bottomDiv.appendChild(authorImg);
    descDiv.appendChild(itemDesc);
    descDiv.appendChild(bottomDiv);

    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(descDiv);

    // add market item to parent container
    marketContainer.appendChild(itemDiv);
};


/**********************************
 * Suggested Market Items
**********************************/
var marketItems1 = [ ];
for (var i = 0; i < 10; i++) {
    marketItems1.push(new MarketItem({
        name: "Item Name",
        description: "This is a cool item.",
        author: {},
        location: {}
    }));
}
for (var i = 0; i < marketItems1.length; i++) {
    marketItems1[i].addToMarket("market-container-suggested");
}


/**********************************
 * Trending Market Items
**********************************/
var marketItems2 = [ ];
marketItems2.push(new MarketItem({
    name: "Item Name",
    description: "This is a cool item.",
    author: {},
    location: {}
}));
marketItems2.push(new MarketItem({
    name: "Item Name",
    description: "This is a cool item.",
    author: {},
    location: {}
}));
marketItems2.push(new MarketItem({
    name: "Item Name",
    description: "This is a cool item.",
    author: {},
    location: {}
}));
for (var i = 0; i < marketItems2.length; i++) {
    marketItems2[i].addToMarket("market-container-trending");
}