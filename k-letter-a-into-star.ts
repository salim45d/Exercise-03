////////////////////////////////////////////////////////
//Change Every Letter a Into * from a String of Input//
///////////////////////////////////////////////////////

let letterA: string = "An apple a day keeps the doctor away";

let starResult = letterA.replace(/a|A/g, "*");

console.log(starResult);
