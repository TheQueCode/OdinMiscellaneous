/*
// For Loop

for (let i = 0; i <= 10; i++){
  let output;
  if(i === 7) output = `Number: 7 is my lucky number.`;
  console.log(output || `Number: ${i}`);
}

// Nested loops

for (let i = 1; i <= 12; i++){
  console.log(`Number: ${i}`);

  for (let j = 1; j <= 12; j++){
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array

const names = ['Henry', 'Que', 'Kaza', 'Quinn', 'Quade'];

for (let i = 0; i < names.length; i++){
  let output;
  if(names[i] === 'Kaza')output = 'Kaza is the best';
  console.log(output || `${names[i]}`);
}

// Break & Continue

for (let i = 0; i <= 20; i++){
  if (i === 15) {
    console.log('Breaking...');
    break;
  }
  console.log(i);
}

// Continue

for (let i = 0; i <= 20; i++){
  if (i === 15) {
    console.log(`Continue...`);
    continue;
  }
  console.log(i);
}

// while loop

let i = 1;
while (i <= 10) {
  console.log(`Number: ${i}`);
  i++;
}

// do while loop
let i = 1;

do {
  console.log(`Number: ${i}`);
  i++;
} while (i <= 10);

// fizzbuzz

function fizzbuzz (num) {
  for (let i = 1; i <= num; i++){
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
}

fizzbuzz(100);

// Print all even numbers from 0 to 10

for (i = 0; i <= 10; i++){
  if(i %2 === 0 ) console.log(`${i}`);
}

//Print times tables

for (let i = 1; i <= 12; i++){
  console.log(`Number: ${i}`);
  for (let j = 1; j <= 10; j++)
    console.log(`${i} * ${j} = ${i * j}`);
}

// Create a function that converts kilometers to miles

function kiloToMiles (kilometers) {
  const miles = (kilometers/1.609).toFixed(2)
  console.log(`${miles}`);
}

kiloToMiles(13)

// Sum the numbers within an array

const arrayToSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayToSum2 = [1, -1, 2, 3, 4, 5, 6, 7, -8, 9, 10, 12, -4];
const arrayToSum3 = [1.23, 3.45, 6.78, 9.1, 1, 2, 3, 4, 5,];

const output = arrayToSum.reduce((total, curr) => total + curr, 0);
console.log(output);
const output2 = arrayToSum2.reduce((total, curr) => total + curr, 0);
console.log(output2);
const output3 = arrayToSum3.reduce((total, curr) => total + curr, 0);
console.log(output3);

// Create a function that reverses an array

function reverseArray (arr) {
  const output = arr.reverse();
  console.log(output);
}

reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

// Sort an array from lowest to highest

function sortMinToMax (arr) {
  const sorted = arr.sort();
  console.log(sorted);
}

sortMinToMax([4, 2, 5, 1, 3]);

// create a function that filters out negative numbers

function noNegs (arr) {
  const allPos = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) allPos.push(arr[i]);
  } 
  console.log(allPos);
}

noNegs([1, -1, 2, 3, 4, 5, 6, 7, -8, 9, 10, 12, -4]);

// Remove spaces found in a string

function spaces (str) {
  const noSpaces = str.replaceAll(" ", "");
  console.log(noSpaces);
}

spaces('     hello       world       ');
spaces('a b c d e f          g h i j k l m n o     p q r s t uvwxyz');

// Return a boolean if a number is divisible by 10

function divisibleByTen (num) {
  num % 10 === 0 ? console.log('true') : console.log('false');
}

divisibleByTen(90);
divisibleByTen(99);
divisibleByTen(109);
divisibleByTen(1110);

// Return the number of vowels in a string

function numberOfVowels (str) {
  let aVowel = 0;
  let eVowel = 0;
  let iVowel = 0;
  let oVowel = 0;
  let uVowel = 0;
  for (let i = 0; i <= str.length; i++){
    if (str[i] === 'a') {
      aVowel++;
    } else if (str[i] === 'e') {
      eVowel++;
    } else if (str[i] === 'i') {
      iVowel++;
    } else if (str[i] === 'o') {
      oVowel++;
    } else if (str[i] === 'u') {
      uVowel++;
    }
  }
  console.log(`There are ${aVowel} a's`);
  console.log(`There are ${eVowel} e's`);
  console.log(`There are ${iVowel} i's`);
  console.log(`There are ${oVowel} o's`);
  console.log(`There are ${uVowel} u's`);
}

numberOfVowels('pneumonoultramicroscopicsilicovolcanoconiosis');
numberOfVowels('Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu');

// function that finds the maximum number in an array

function maxNum (arr) {
  const maxiNumInArr = Math.max(...arr);
  console.log(maxiNumInArr);
}

maxNum([1, 5, 2, 8, 3]);
maxNum([1110, 555, 342, -8888, 333]);
*/
// Check if a string is a palindrome

function palindrome (str) {
  const lowerStr = str.toLowerCase()
  const reverseStr = lowerStr.split('').reverse().join('');
  return reverseStr === lowerStr;
}

console.log(palindrome('kayak'));
console.log(palindrome('radar'));
console.log(palindrome('refer'));
console.log(palindrome('mom'));
console.log(palindrome('function'));