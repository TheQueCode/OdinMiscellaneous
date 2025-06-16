const container = document.querySelector('.container');
const results = document.querySelector('.results');

const calculateBtn = document.createElement('button');
calculateBtn.textContent = 'Calculate';
calculateBtn.addEventListener('click', calculate);
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
clearBtn.addEventListener('click', () => (results.textContent = ''));

container.insertBefore(calculateBtn, results);
container.insertBefore(clearBtn, results);

function calculate () {
  for (let i = 1; i <= 10; i++){
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += '\nFinished!\n\n';
}

const cats = ['Leopard', 'Jaguar', 'Tiger', 'Lion', 'Mountain Lion', 'Cheeta'];

for (const cat of cats) {
  console.log(cat);
}

// use map() to do something to each item in a collection & create a new collection containing the changes

function toUpper (string) {
  return string.toUpperCase();
}
 
const upperCats = cats.map(toUpper);

console.log(upperCats); // ['LEOPARD', 'JAGUAR', 'TIGER', 'LION', 'MOUNTAIN LION', 'CHEETA']

// use filter() to test each item in a collection & create a new collection containing only items that match (returns a boolean)

/*
function lCat (cat) {
  return cat.startsWith('L');
}

const filtered = cats.filter(lCat);

console.log(filtered);
*/

// More compact

const filtered = cats.filter(cat => cat.startsWith('L'));

console.log(filtered);


const catsName = ['Pete', 'Biggles', 'Bojangles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < catsName.length; i++){
  if (i === catsName.length - 1) {
    myFavoriteCats += `and ${catsName[i]}.`
  } else {
    myFavoriteCats += `${catsName[i]}, `
  }
}

console.log(myFavoriteCats);

// Exiting loops with break
/*
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
*/
// skipping iterations with continue

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});


// Active learning

//count down from 10

for (i = 10; i >= 0; i--){
  if (i === 10) {
    console.log(`Countdown`);
  }
  console.log(`${i}`);
  if (i === 0) {
    console.log(`Blast off!`);
  }
}

// map

function addOne (num) {
  return num + 1;
}

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); // [2, 3, 4, 5, 6]

// filter

function isOdd (num) {
  return num % 2 !== 0;
}

const array = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);
console.log(oddNums); // [1, 3, 5]
console.log(array); // [1, 2, 3, 4, 5]

// reduce

const arrArr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, current) => {
  return total * current;
}, 1);

console.log(productOfAllNums); // 120
console.log(arrArr); // [1, 2, 3, 4, 5]

function camelize (string) {
  return string
    .split('-')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('')
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


function filterRange (arr, a, b) {
  arr.filter(() => {});
  console.log(arr);
}

let arrToFilter = [5, 3, 8, 1];
filterRange(arrToFilter, 1, 4);


// Active learning - filling in a guest list
const guestList = document.createElement('div');
guestList.textContent = 'GuestList: '
const admitted = document.createElement('p');
admitted.textContent = 'Admitted: '
const refused = document.createElement('p');
refused.textContent = 'Refused: '

container.appendChild(guestList);
guestList.appendChild(admitted);
guestList.appendChild(refused);

const people = ['Henry', 'Que', 'Greg', 'Quinn', 'Phil', 'Charlie', 'Adam', 'Kaza', 'Lola', 'Wendy'];

for (let person of people) {
  person === 'Phil' || person === 'Lola' ? refused.textContent += person + ' ' : admitted.textContent += person + ' ';
}

for (let i = 2; i <= 10; i++){
  if (i % 2 === 0) console.log(`${i}`);
}


let num;

do {
  num = prompt('Enter a number greater than 100: ', 0);
} while (num <= 100 & num);



