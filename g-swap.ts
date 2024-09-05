///////////////////////////////////////////////
//Swap the Case of Each Character from String//
///////////////////////////////////////////////

let huruf: string = "The QuiCk BrOwN Fox";
let kalimatBaru: string = "";

for (let i: number = 0; i < huruf.length; i++) {
  if (huruf[i] == huruf[i].toLowerCase()) {
    kalimatBaru += huruf[i].toUpperCase();
  } else {
    kalimatBaru += huruf[i].toLowerCase();
  }
}

console.log(kalimatBaru);
