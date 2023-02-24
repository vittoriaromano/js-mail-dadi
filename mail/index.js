'use strict'

//creamo una lista di email che fanno parte della vip guest list

const mail1 = ('gmail@gmail.com');
const mail2 = ('ciao@outlook.com');
const mail3 = ('ciao@outyahoo.com');

const vipEmail = [mail1, mail2, mail3];
console.log(vipEmail)


//promt con la domanda, email dell'user
let question = prompt('what is your email?');
console.log(question)

let  entra = false

//confrontiamo l'email scritta dall'utente con la nostra lista vip
for (let i = 0; i < vipEmail.length; i++){
    const email = vipEmail[i];
    if ( email === question){
        let entra = true;
    }
}
//se l'email fa parte della lista vip stampa : si
//se l'email non fa parte della lista stampa: no 
if (entra === true){
    alert('si')
}else{
    alert('no')
}






