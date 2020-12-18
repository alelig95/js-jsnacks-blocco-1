// Esercizio svolto con for:

var numeroUtente;
var listaNumeri = [ ];

var sommaNumeri = 0;

for(var i = 0; i < 5; i++) {
 numeroUtente = parseInt(prompt('Digita un numero'));
 listaNumeri.push(numeroUtente);
 sommaNumeri += listaNumeri[i];
}

console.log(listaNumeri);
console.log('la somma dei numeri è ' + sommaNumeri);

// Esercizio svolto con while:

// var numeroUtente;
// var listaNumeri = [ ];
//
// var sommaNumeri = 0;
//
// var i = 0;
// while (i < 5) {
//   numeroUtente = parseInt(prompt('Digita un numero'));
//   listaNumeri.push(numeroUtente);
//   sommaNumeri += listaNumeri[i];
//   i++;
// }
//
// console.log(listaNumeri);
// console.log('la somma dei numeri è ' + sommaNumeri);
