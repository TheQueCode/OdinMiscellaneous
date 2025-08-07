function range (start, end) {
    let arr = [];
    for (let i = start; i <= end; i++){
        arr.push(i)
    }
    return arr;
}

console.log(range(1, 10));

function sum (array) {
    let output = array.reduce((acc, curr) => acc + curr, 0);
    return output;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));