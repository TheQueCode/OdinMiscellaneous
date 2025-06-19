/*
function repeatString (string, num) {
  let output = "";
  for (let i = 0; i < num; i++){
    output += string;
  }
  console.log(output);
};

repeatString("boop", 3);
repeatString("ciuenwnjcdj", 2)

function reverseString(string){
  const newString = string.split("").reverse().join("");
  console.log(newString);
};

reverseString("blahblahblah");
reverseString("hello there");

const removeFromArray = function (arr, ...toRemove)
{
  const newArr = [];
  arr.forEach((item) =>
  {
    if (!toRemove.includes(item)) {
      newArr.push(item);
    }
  });
  return newArr;
};


console.log(removeFromArray([13, 45, 67, 89 ], 13));
console.log(removeFromArray([1, 2, 3, 4, 5], 1, 2, 3, 4));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

function add7 (number) {
  return number + 7;
}

console.log(add7(13));

function multiply (num1, num2) {
  return num1 * num2;  
}

console.log(multiply(10, 10));

function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize('doeS thIs worK?'));
console.log(capitalize('reivmerkmvdFFOekrvevieSDLsver'));

function lastLetter (string) {
  return string.slice(-1);
}

console.log(lastLetter('Does this work?'));
console.log(lastLetter('reivmerkmvdFFOekrvevieSDLsveX'));

// Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

const names = users.map(item => item.name);
console.log(names);

//You have an array of user objects, each one has name, surname and id. Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

const usersMapped = users.map(item => {
  return {
    fullname: `${item.name} ${item.surname}`, id: `${item.id}`
  }
});

console.log(usersMapped);
*/

//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

const sortByAge = arr.sort((a, b) => a.age - b.age);

console.log(sortByAge);
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

