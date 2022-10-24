

/**********************************
 * User Designs
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
    marketItems1[i].addToMarket("user-designs");
}