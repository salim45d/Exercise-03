///////////////////////////
//CAPITALIZE FIRST LETTER//
///////////////////////////

let words: string = "hello world";
let word: string[] = words.split(" ");

for (let i: number = 0; i < word.length; i++) {
  word[i] = word[i][0].toUpperCase() + word[i].substring(1);
}

let resultWords: string = word.join(" ");

console.log(resultWords);
