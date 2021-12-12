const fs = require("fs");
const text = fs.readFileSync("./input.txt").toString('utf-8');
const textByLine = text.split("\n");
const numbers = textByLine.map(num => Number(num))

const increased = function(array) {
  let counter = 0;
  array.forEach((val, idx) => {
    if(array[idx] < array[idx+1]) {
      counter += 1;
    }
  })
  return counter
}

const a = increased(numbers)
console.log(a)
