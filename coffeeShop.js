/* CoffeeShop
Properties:
name: a string (basically, of the shop)
menu: an array of items (of object type), with each item containing the item (name of the item), type
(whether food or a drink) and price.
orders: an empty array
Methods:
addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
Otherwise, return "This item is currently unavailable!"
fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is
empty, return "All orders have been fulfilled!"
listOrders: returns the list of orders taken, otherwise, an empty array.
dueAmount: returns the total amount due for the orders taken.
cheapestItem: returns the name of the cheapest item on the menu.
drinksOnly: returns only the item names of type drink from the menu.
foodOnly: returns only the item names of type food from the menu.
IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order. */

class CoffeeShop {
  constructor(name) {
    this.name = name;
    this.menu = [];
    this.orders = [];
  }
  addItems(item) {
    this.menu.push(...item);
    console.log(this.menu);
  }
  addOrder(item) {
    let isExist = false;
    this.menu.forEach((e) => {
      if (item === e.name) {
        this.orders.push(e);
        isExist = true;
      }
    });

    if (!isExist) {
      console.log(`${item} is currently unavailable!`);
    }
  }
  fulfillOrder() {
    if (this.orders.length === 0) {
      console.log("All orders have been fulfilled!");
    } else {
      let readyItem = this.orders.shift();
      console.log(`${readyItem.name} is ready!`);
    }
  }
  listOrders() {
    console.log("List Orders = ", this.orders);
  }
  dueAmount() {
    const totalPrice = this.orders.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    console.log("Total Price = ", totalPrice);
  }
  cheapestItem() {
    const cheapestItem = this.menu.reduce((acc, item) => {
      if (acc.price < item.price) {
        return acc;
      }
    });
    console.log(`The cheapest item on menu is ${cheapestItem.name}!`);
  }
  drinksOnly() {
    const drinks = this.menu.filter((item) => {
      return item.type === "drink";
    });
    console.log(drinks);
  }
  foodOnly() {
    const food = this.menu.filter((item) => {
      return item.type === "food";
    });
    console.log(food);
  }
}

class Item {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
}

const coffeeShop = new CoffeeShop("Pele");

const item1 = new Item("pepsi", "drink", 500);
const item2 = new Item("capuchino", "drink", 700);
const item3 = new Item("ice-cream", "food", 1000);
const item4 = new Item("biscuit", "food", 600);
const item5 = new Item("americano", "drink", 800);

coffeeShop.addItems([item1, item2, item3, item4, item5]);
coffeeShop.addOrder("moxito");
coffeeShop.addOrder("ice-cream");
coffeeShop.addOrder("americano");
coffeeShop.fulfillOrder();
coffeeShop.listOrders();
coffeeShop.dueAmount();
coffeeShop.cheapestItem();
coffeeShop.drinksOnly();
coffeeShop.foodOnly();
