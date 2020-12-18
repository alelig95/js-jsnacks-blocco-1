var numeroUtente = prompt('Digita un numero');
var sommaNumeri = 0;
if (numeroUtente.length != '4') {
  alert('Il numero deve essere di quattro cifre');
} else {

  for(var i = 0; i < numeroUtente.length; i++) {
   sommaNumeri += parseInt(numeroUtente[i]);
  }

  console.log('la somma dei numeri è ' + sommaNumeri)
}
