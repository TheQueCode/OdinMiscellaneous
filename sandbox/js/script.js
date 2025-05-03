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

function removeFromArray(arr, toRemove){

};

removeFromArray([1, 2, 3, 4, 5], 1, 2, 3, 4);
removeFromArray([1, 2, 3, 4], 3, 2);