var Menu = require("../src/Menu");
var Item = require('../src/Item')

describe("Menu", () => {
  it("Should return list of menu items.", () => {
    var item1 = new Item('Long Black', 5);
    var item2 = new Item('Espresso', 4);
    var menu = new Menu([item1, item2]);

    expect(menu.items).toEqual([item1, item2]);
  });
});
