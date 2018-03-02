var Item = require("../src/Item");
var Order = require("../src/Order");

describe("Order", () => {
  it("should create an order successfully mentioning item and customername", () => {
    var item = new Item("Long Black", 10);
    var customerName = "Santosh";
    var order = new Order(item, customerName);

    expect(order.item).toBeInstanceOf(Item);
    expect(order.customerName).toEqual(customerName);
  });
});
