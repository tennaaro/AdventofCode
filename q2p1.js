const fs = require("fs");
const text = fs.readFileSync("./q2p1.txt").toString('utf-8');
const textByLine = text.split("\n");


const sorting = function(array) {
  let horizontal = []
  let down = []
  let up = []
  array.forEach((val) => {
    if(val.includes("forward")) {
      horizontal.push(Number(val.slice(8)))
    }
    else if(val.includes("down")) {
      down.push(Number(val.slice(5)))
    }
    else {
      up.push(Number(val.slice(3)))
    }
  })

  const horizontalSum = horizontal.reduce((a, b) => a + b, 0)
  const downSum = down.reduce((a, b) => a + b, 0)
  const upSum = up.reduce((a, b) => a + b, 0)

  const depth = downSum - upSum
  return depth * horizontalSum


}

const a = sorting(textByLine)
console.log(a)