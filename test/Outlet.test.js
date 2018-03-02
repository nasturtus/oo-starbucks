var Outlet = require("../src/Outlet");
var Menu = require("../src/Menu");
var Owner = require("../src/Owner");

describe("Outlet", () => {

  it("Should have an owner and a menu.", () => {
    var owner = new Owner();
    var menu = new Menu();
    var outlet = new Outlet(menu, owner);

    expect(outlet.owner).toEqual(owner);
    expect(outlet.menu).toEqual(menu);
  });

});
