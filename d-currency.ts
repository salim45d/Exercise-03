//////////////////////
//NUMBER AS CURRENCY//
//////////////////////

let nonimal: number = 1000;

let rupiahNominal: string = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
}).format(nonimal);

console.log(rupiahNominal);
