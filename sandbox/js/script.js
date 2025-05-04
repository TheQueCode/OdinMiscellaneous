function repeatString(string, num){
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
console.log(removeFromArray([ 1, 2, 3, 4 ], 3, 2));
