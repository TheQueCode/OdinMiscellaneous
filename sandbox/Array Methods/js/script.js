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

// for of loops

//loop through arrays

const items = ['book', 'table', 'chair', 'kite'];
const users = [{name: 'Que'}, {name: 'Kaza'}, {name: 'Quinn'}];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

// loop over strings

const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

//loop over maps

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}

// for in loop

const colorObj = {
  color1: 'red',
  color2: 'orange',
  color3: 'yellow',
  color4: 'green',
  color5: 'blue',
  color6: 'indigo',
  color7: 'violet',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
  //console.log(color); //0, 1, 2, 3
  console.log(colorArr[key]); // red green blue yellow
}

// High order array methods

// forEach

const socials = ['Twitter', 'LinkedIn', 'Threads', 'Instagram'];

socials.forEach(logSocials);

function logSocials (social) {
  console.log(`${social}`)
}

const socialObj = [
  {name: 'Threads', url: 'https://threads.com'},
  {name: 'Instagram', url: 'https://instagram.com'},
  {name: 'LinkedIn', url: 'https://linkedin.com'},
  {name: 'BlueSky', url: 'https://bluesky.com'},
];

socialObj.forEach(item => console.log(item.url));

// high order array method 

// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const output = words.filter(word => word.length > 6)

console.log(output);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNums = numbers.filter(number => number % 2 === 0);

console.log(evenNums);

// with a forEach

let evenNumbersArray = [];
numbers.forEach(number => {
  if (number % 2 === 0) {
    evenNumbersArray.push(number);
  }
})

// Array of company objects

const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

// Get only retail companies

const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005 

const oldCompanies = companies.filter(company => company.start >= 1980 && company.end <= 2005);
console.log(oldCompanies);

// Get companies that lasted 10 years or more

const decadeCompanies = companies.filter(company => company.end - company.start >= 10);
console.log(decadeCompanies);

// high order array method

// map

const arrayMap = [1, 4, 9, 16];

const doubledNumbers = arrayMap.map(number => `Number ${number} Doubled: ${number * 2}`);

console.log(doubledNumbers);

const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

// Create an array of company names

const companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create an array with company and category

const companyCategory = companies.map(company => `Company: ${company.name} - Category: ${company.category}`);
console.log(companyCategory);

// Create an obj with company and category

const companyInfo = companies.map(company => {
  return {
    name: company.name,
    category: company.category
  }
});
console.log(companyInfo);

// Create an array of the length of each company in years

const companyLength = companies.map(company => `${company.name}: ${company.end - company.start} years`);
console.log(companyLength);

// Create an array of objects with the name of the length of each company in years

const companyYears = companies.map(company => {
  return {
    company: company.name,
    years: company.end - company.start
  };
});
console.log(companyYears);

// chain map methods
 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const squareAndDoubled = numbers
  .map(number => Math.sqrt(number))
  .map(sqrtNum => sqrtNum * 2) //sqrtNum is the numbers from the first map, you can name them anything

console.log(squareAndDoubled);

// chain other methods

const evenDoubled = numbers
  .filter(number => number % 2 === 0)
  .map(evenNums => evenNums * evenNums)

console.log(evenDoubled);

// high order array method

// reduce

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalArray = array.reduce((prev, curr) => prev + curr, 0);
console.log(totalArray);

const cart = [
  {id: 1, name: 'Product 1', price: 130},
  {id: 2, name: 'Product 2', price: 150},
  {id: 3, name: 'Product 3', price: 175},
  {id: 4, name: 'Product 4', price: 180},
  {id: 5, name: 'Product 5', price: 230},
];

const totalCart = cart.reduce((prev, curr) => prev + curr.price, 0);
console.log(totalCart);


const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Joe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter(person => person.age <= 25)
  .map(ppl => {
    return {
      name: `${ppl.firstName} ${ppl.lastName}`,
      email: `${ppl.email}`
    }
  }
  );
  
console.log(youngPeople);

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveNumbers = numbers
  .filter(numbers => numbers > 0)
  .reduce((prev, curr) => prev + curr, 0);

console.log(positiveNumbers);

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words
  .map(words => words[0].toUpperCase() + words.slice(1))

console.log(capitalizedWords);

function camelize (str) {
  return str
    .split('-')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


function filterRange (arr, a, b) {
  arr.filter(item => {
    if ((item >= a) && (item <= b))
      console.log(item);
  })
};

let array = [5, 3, 8, 1];

filterRange(array, 1, 4);
*/

let arr = [5, 2, 1, -10, 8];

const sortedDecreasing = arr.sort((a, b) => b - a);
//const sortedIncreasing = arr.sort((a, b) => a - b);

console.log(sortedDecreasing);
//console.log(sortedIncreasing);