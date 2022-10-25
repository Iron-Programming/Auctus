/**********************************
 * User Designs
**********************************/
var marketItems2 = [ ];
for (var i = 0; i < 5; i++) {
    marketItems2.push(new MarketItem({
        name: "Item Name",
        description: "This is a cool item.",
        author: {},
        location: {}
    }));
}
for (var i = 0; i < marketItems2.length; i++) {
    marketItems2[i].addToMarket("user-designs");
}