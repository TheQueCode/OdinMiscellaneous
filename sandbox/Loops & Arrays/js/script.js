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


// Acive learning

//coun down from 10

for (i = 10; i >= 0; i--){
  if (i === 10) {
    console.log(`Countdown`);
  }
  console.log(`${i}`);
  if (i === 0) {
    console.log(`Blast off!`);
  }
}