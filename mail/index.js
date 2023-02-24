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

//accertati che abbia scritto una email, in caso ricomincia
if(question.value === "" || question.value === null){  //non mi funziona alert :)
    alert('required email');
}

//confrontiamo l'email scritta dall'utente con la nostra lista vip
if(question.value === vipEmail ){
    console.log('si')
}else if(question.value !== vipEmail){
    console.log('no')
}
