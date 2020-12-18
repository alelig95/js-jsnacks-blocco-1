var firstNumber = prompt('Digita il primo numero');
var secondNumber = prompt('Digita il secondo numero');

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

if(firstNumber > secondNumber) {
  console.log(firstNumber)
} else if (firstNumber < secondNumber){
  console.log(secondNumber)
} else {
  console.log('I due numeri sono uguali');
}
