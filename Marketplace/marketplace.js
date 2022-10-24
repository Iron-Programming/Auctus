

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