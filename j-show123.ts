/* ///////////////////////////////////
=> Show 1 if the input is a string, //
=> Show 2 if the input is a number, //
=> Show 3 for others data type.     //
////////////////////////////////////*/

let input: string = typeof "hello";
let showResult: string = "";

if (input === "string") {
  showResult = "1";
} else if (input === "number") {
  showResult = "2";
} else {
  showResult = "3";
}

console.log(showResult);
