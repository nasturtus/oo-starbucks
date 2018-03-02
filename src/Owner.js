class Owner {
  constructor() {
    this.orders = [];
  }

  createOrder(order) {
    this.orders.push(order);
    return this.orders;
  }
}

module.exports = Owner;
