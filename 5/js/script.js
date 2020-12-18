var listaNumeri = [];
var sceltaNumero;

for (var i = 0; i < 6; i++) {
  sceltaNumero = parseInt(prompt('Scegli un numero'));
  if(sceltaNumero % 2 !== 0) {
    listaNumeri.push(sceltaNumero);
  }
}
 console.log(listaNumeri)
