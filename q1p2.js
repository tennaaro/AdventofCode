const fs = require("fs");
const text = fs.readFileSync("./q1p2.txt").toString('utf-8');
const textByLine = text.split("\n");
const numbers = textByLine.map(num => Number(num))

const increased = function(array) {
  let partitiondArr = []
  for (let i = 0; i < array.length; i++) {
    let temp = array.slice(i, i+3)
    partitiondArr.push(temp)
  }
  const sums = partitiondArr.map(term => term.reduce((a, b) => a + b, 0))
  let counter = 0;
  sums.forEach((val, idx) => {
    if(sums[idx] < sums[idx + 1]) {
      counter += 1
    }
  })
  return counter
}

const a = increased(numbers)
console.log(a)