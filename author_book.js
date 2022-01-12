/* Create an Author class and a Book class.
Author should have:
fields
name
email
gender
methods
getters for fields
toString()
Book should have:
fields
title
author(Author)
price
quantity
methods
getters for fields
setters for fields
getProfit() - which calculates the profit from the book based on the price and quantity.
toString()

Example

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error */

class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      throw new Error();
    }
  }
  get email() {
    return this._email;
  }
  set email(value) {
    if (typeof value === "string") {
      this._email = value;
    } else {
      throw new Error();
    }
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    if (typeof value === "string") {
      this._gender = value;
    } else {
      throw new Error();
    }
  }
  toString() {
    if (this._gender === "female") {
      return `Ms. ${this._name}`;
    } else {
      return `Mr. ${this._name};`;
    }
  }
}

class Book extends Author {
  constructor(name, title, price, quantity) {
    super(name);
    this._title = title;
    this._price = price;
    this._quantity = quantity;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value === "string") {
      this._title = value;
    } else {
      throw new Error();
    }
  }

  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value === "string") {
      this._price = value;
    } else {
      throw new Error();
    }
  }

  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    if (typeof value === "number") {
      this._quantity = value;
    } else {
      throw new Error();
    }
  }
  getProfit() {
    return parseInt(this.price) * this.quantity;
  }
  toString() {
    return `${this.name}, ${this.title}, ${this.price}, ${this.quantity}`;
  }
}

let author1 = new Author("J. K. Rowling", "abc@gmail.com", "femaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author1.name = 12; // throws error

let book1 = new Book("Alexander Duma", "Coms Monte Kristo", "20$", 5);
console.log(book1.toString());
console.log(book1.getProfit());
book1.name = 12;
