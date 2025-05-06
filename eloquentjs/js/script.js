/*
let theNumber = +prompt("Pick a number:");
if (!Number.isNaN(theNumber)) {
  console.log(`Your number is the square root of ${theNumber * theNumber}`);
} else {
  console.log(`Hey. Why didn't you give me a number?`);
}

// The Number.isNaN() function is a standard JavaScript function that returns true only if the argument it is given is NaN.

// The condition translates to: unless ( ) is not-a-number, do this

let num = +prompt('Pick a number: ');
if (num < 10) {
  console.log(`Small`);
} else if (num < 100) {
  console.log(`Medium`);
} else {
  console.log(`Large`);
}

// all even numbers from 0 to 12

for (let i = 0; i <= 12; i++){
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 12; i+=2){
  console.log(i);
}

let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
  result *= 2;
  counter++;
}
console.log(result);

let output = 1;
for (let counter = 0; counter < 10; counter++){
  output *= 2;
}
console.log(output);

let twoTen = 2 ** 10;
console.log(twoTen);

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(`Hello ${yourName}`);

// find the first number that is both greater than or equal to 20 && divisible by 7

for (let current = 20; ; current++){
  if (current % 7 === 0) {
    console.log(current);
    break;
  }
}

switch (prompt(`What is the weather like?`)) {
  case 'rainy':
    console.log(`Remember to bring an umbrella.`);
    break;
  case 'sunny':
    console.log('Dress lightly.');
    break;
  case 'cloudy':
    console.log('Go outside.');
    break;
  case 'snowing':
    console.log('Dress warmly!');
    break;
  default:
    console.log('Unknown weather type!');
    break;
}
*/
/*
// triangle

for (i = '#'; i <= '#######'; i+='#'){
  console.log(i);
}

let triangle = '';
for (i = 1; i <= 7; i++){
  triangle += '#'
  console.log(triangle);
}

for (i = 1; i <= 7; i++){
  console.log('#'.repeat(i));
}
*/

// FizzBuzz
/*
for (i = 1; i <= 100; i++){
  let output = "";
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz'
  console.log(output || i);
}
*/

// ChessBoard
/*
let size = 8;
let board = "";

for (let i = 0; i < size; i++){
  for (let j = 0; j < size; j++){
    if ((i + j) % 2 === 0) {
      board += '#';
    } else {
      board += ' ';
    }
  }
  board += '\n';
}

console.log(board);
*/
/*
const square = function (x) {return x * x;};
console.log(square(12));

const squareArrow = x => x * x;
console.log(squareArrow(11));
*/

// Growing Functions
/*
function printFarmInventory (cows, chickens)
{
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }console.log(`${chickenString} Chickens`);
}
*/
/*
printFarmInventory(7, 11);

function printZeroPaddedWithLabel (number, label)
{
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory (cows, chickens, pigs)
{
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);
*/

function zeroPad (number, width)
{
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory (cows, chickens, pigs)
{
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);