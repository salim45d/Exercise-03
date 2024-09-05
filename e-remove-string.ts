////////////////////////////
//SEARCH AND REMOVE STRING//
////////////////////////////

let strings: string = "Hello World";
let seacrhStrings: string = "ell";
let remove: string = "";

let found: number = strings.indexOf(seacrhStrings);

if (found === -1) {
  remove == strings;
} else {
  remove =
    strings.slice(0, found) + strings.slice(found + seacrhStrings.length);
}

console.log(remove);
