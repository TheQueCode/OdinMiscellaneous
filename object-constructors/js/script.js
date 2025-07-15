// Object Constructor
/*
function Player (name, marker) {
  this.name = name;
  this.marker = marker;
}

// Call with the keyword new
const player = new Player('steve', 'X');
console.log(player.name);

// you can add functions to the object

function Player (name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also Steve', 'O');
player1.sayName();
player2.sayName();
*/
// Safeguarding constructors - constructors could be called without using new by mistake - which causes hard-to-track errors. To prevent that use the new.target meta-property
/*
function Player (name, marker) {
  if (!new.target) {
    throw Error('You must use the `new` operator to call the constructor')
  }
  this.name = name;
  this.marker = marker;
  this.sayName = () => console.log(this.name);
}
*/
// Exercise - write a constructor for making "Book" objects - should have the book's title, author, and number of pages, and whether or not you have read the book. Put a function into the constructor that can report the book infor like so: title by author, pages, read or not read

function Book (title, author, pageNum, read) {
  if (!new.target) {
    throw Error('You must use the `new` operator to call the constructor')
  }
  this.title = title;
  this.author = author;
  this.pageNum = pageNum;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pageNum} pages, ${this.read}`;
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

console.log(theHobbit.info());

/*
function Person (name) {
  if (!new.target) {
    throw Error('Must use `new` operator to call constructor')
  }
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player (name, marker) {
  if (!new.target) {
    throw Error(`Must use 'new' operator to call constructor`)
  }
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function () {
  console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype);

// Now make 'Player' objects inherit from 'Person'
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();
*/
let output;
// creating a new empty object
let x = {};

// another way
let y = new Object();

// to find the prototype of a created object
output = Object.getPrototypeOf(x);
output = Object.getPrototypeOf(y);



console.log(output);