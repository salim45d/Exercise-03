//////////////////////////////////
// Largest of Two Given Integers//
//////////////////////////////////

let num_1: number = 42;
let num_2: number = 27;

let numLargest: string = "";

if (num_1 > num_2) {
  numLargest = `${num_1}`;
} else if (num_1 < num_2) {
  numLargest = `${num_2}`;
} else {
  numLargest = `Equal`;
}

console.log(numLargest);
