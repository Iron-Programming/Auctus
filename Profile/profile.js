

/**********************************
 * User Designs Showcase
**********************************/
var marketItems1 = [ ];
for (var i = 0; i < 5; i++) {
    marketItems1.push(new MarketItem({
        name: "Item Name",
        description: "This is a cool item.",
        author: {},
        location: {}
    }));
}
for (var i = 0; i < marketItems1.length; i++) {
    marketItems1[i].addToMarket("user-designs-showcase");
}

/**********************************
 * User Marketing Packages
**********************************/
var marketItems3 = [ ];
for (var i = 0; i < 5; i++) {
    marketItems3.push(new MarketItem({
        name: "Item Name",
        description: "This is a cool item.",
        author: {},
        location: {}
    }));
}
for (var i = 0; i < marketItems3.length; i++) {
    marketItems3[i].addToMarket("user-marketing-packages");
}