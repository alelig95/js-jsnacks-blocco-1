var numeroUtente = parseInt(prompt('Scrivi un numero'));
if (numeroUtente > 10) {
  alert('Fermati subito!')
} else {

for (var i = 1; i <= numeroUtente; i++) {
  console.log(Math.pow(i, 3));
}

}
