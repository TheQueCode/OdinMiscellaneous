let number = prompt('Enter the number you would like to FizzBuzz to: ')

function fizzbuzz (number) {
  for (let i = 1; i <= number; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
}

fizzbuzz(number);