////////////////
//SORT NUMBERS//
////////////////

let num1: number = 42,
  num2: number = 27,
  num3: number = 18;
let resulNum = "";

if (num2 <= num1 && num1 <= num3) {
  resulNum = `${num2}, ${num1}, ${num3}`;
} else if (num3 <= num1 && num1 <= num2) {
  resulNum = `${num3}, ${num1}, ${num2}`;
} else if (num1 <= num2 && num2 <= num3) {
  resulNum = `${num1}, ${num2}, ${num3}`;
} else if (num3 <= num2 && num2 <= num1) {
  resulNum = `${num3}, ${num2}, ${num1}`;
} else if (num1 <= num3 && num3 <= num2) {
  resulNum = `${num1}, ${num3}, ${num2}`;
} else if (num2 <= num3 && num3 <= num1) {
  resulNum = `${num2}, ${num3}, ${num1}`;
}

console.log(resulNum);
