
console.log("Hello, World!");

/* console.log() is the command to print something to the developer console in your browser */

/*
let name = "John";
let surname = "Wick";

console.log(name, surname);

let age = 11;
console.log(age);

age = 54;
console.log(age);

const pi = 3.14;

console.log(pi);
*/
/* 
    let can be re-assigned. 
    const can't be re-assigned
*/

/*
console.log(3 + 2) - 76 * (1 + 1);
console.log(23 + 97);
console.log(13 + 1110 + 1111 + 50 + 46 + 69);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);

a = 13;
console.log(a);

let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual/max;

console.log(percentage);
*/
/*
let a = 1, b = 1;

let c = ++a;
console.log(c);

let d = b++;
console.log(d);
*/
/*
let a = 2;

let x = 1 + (a *= 2);

console.log(a, x);
*/
/*
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // -9 5
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // -2
*/
/*
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

// To fix add +

alert(a + b); 
*/

/* MDN web docs */
/*
const string = "The revolution will not be televised.";
console.log(string);

/*
const badstring1 = This is a test;
const badstring2 = 'This is a test;
const badstring3 = This is a test';
*/
/*
const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single, double, backtick);

/*
const badQuotes = 'This is not allowed!"
*/
/*
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // Hello, Chris

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // Hello, how are you?
*/
/*
const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
*/
/*
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // Hello, Chris
console.log(`${greeting}, ${name}`);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output); // I like the song Fight the Youth. I gave it a score of 90%
*/

const newline = `One day you finally knew 
what you had to do, 
and began,`;
console.log(newline);