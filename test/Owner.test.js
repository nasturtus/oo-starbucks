var Owner = require("../src/Owner");
var Order = require("../src/Order");
var Item = require("../src/Item");

describe("Outlet", () => {
  it("Should create an owner successfully.", () => {
    var owner = new Owner();
    expect(owner).toBeInstanceOf(Owner);
  });

  it("Should return order's customer name.", () => {
    var item = new Item("Long Black", 4);
    var customerName = "Santosh";
    var order = new Order(item, customerName);

    var owner = new Owner();
    expect(owner.createOrder(order)).toEqual([order]);
  });
});
