'use strict'

// - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
   //prompt chiedi al user un numero tra uno e sei.
const nUser = parseInt(prompt('write a number from on eto six'));

//accertati che il numero sia solo fino a sei, in caso ricomincia

//chiadeiamo al signor js un numero randomico tra uno e sei
const nComp = Math.floor(Math.random()*6)+1;

//stampiamo i duei numeri 
console.log(nUser);
console.log(nComp);

// - Stabilire il vincitore, in base a chi fa il punteggio più alto.
// confrontiamo duei numeri
//se l'user ha il numero piu grande stampa: hai vinto
if(nUser > nComp){
  alert('hai vinto')
}else if(nComp > nUser){  //se l'user ha il numero piu piccolo stampa: hai perso
  alert('hai perso')
}else if (nComp === nUser){
    alert('pareggio') //se l'user ha il numero uguale al signor js stampa: pareggio
}



