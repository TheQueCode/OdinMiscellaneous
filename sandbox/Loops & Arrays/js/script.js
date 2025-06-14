const container = document.querySelector('.container');

const btn = document.createElement('button');
btn.textContent = 'Create';

container.appendChild(btn);

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

function lCat (cat) {
  return cat.startsWith('L');
}

const filtered = cats.filter(lCat);

console.log(filtered);