var nomeUtente = prompt('Qual è il tuo nome?');
var listaInvitati = ['Marco', 'Sonia', 'Gianni', 'Teresa'];

var nomeTrovato = false
for(var i = 0; i < listaInvitati.length; i++) {
  if (nomeUtente === listaInvitati[i]) {
    nomeTrovato = true;
  }
}

if(!nomeTrovato) {
  console.log('Non puoi entrare alla festa');
} else {
  console.log('Puoi entrare alla festa')
}
