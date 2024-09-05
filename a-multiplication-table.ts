////////////////////////
//MULTIPLICATION TABLE//
///////////////////////

let number: number = 9;
let resultMultiplication = "";

for (let i: number = 1; i <= 10; i++) {
  resultMultiplication += `${number} x ${i} = ${number * i}` + "\n";
}

console.log(resultMultiplication);
