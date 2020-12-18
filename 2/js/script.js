var firstWord = prompt('Digita la prima parola');
var secondWord = prompt('Digita la seconda parola');

if(firstWord.length > secondWord.length) {
  console.log(firstWord)
  console.log(secondWord)
} else if(firstWord.length < secondWord.length) {
  console.log(secondWord)
  console.log(firstWord)
} else {
  console.log('Le due parole hanno la stessa lunghezza');
}
