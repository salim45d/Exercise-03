//////////////
//PALINDROME//
//////////////

let kata: string = "madam";
let resultPalindrome: string = "";
let reserveKata: string = "";

for (let i = kata.length - 1; i >= 0; i--) {
  reserveKata += kata[i];

  if (reserveKata === kata) {
    resultPalindrome = `${kata} is "Palindrome"`;
  } else {
    resultPalindrome = `${kata} is not "Palindrome"`;
  }
}

console.log(resultPalindrome);

///////////////////
/*BUILD IN METHOD*/
///////////////////

let reverseWord: string = kata.split("").reverse().join("");

console.log(
  kata === reverseWord
    ? `${kata} is "Palindrome"`
    : `${kata} is not "Palindrome"`
);
