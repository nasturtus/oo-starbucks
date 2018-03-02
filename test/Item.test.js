var Item = require("../src/Item");

describe("Item", () => {
  it("Should create an Item successfully.", () => {
    var itemName = "Coffee";
    var itemPrice = 5;
    var item = new Item(itemName, itemPrice);

    expect(item.itemName).toEqual(itemName);
    expect(item.itemPrice).toEqual(itemPrice);
  });
});
