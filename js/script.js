// Password generator

/* 
Chiedere nome all'utente
Chiedere cognome all'utente
Chiedere colore preferito all'utente
Stampare nome + cognome + colore preferito + 22
*/

let nome = prompt('Inserire nome');
let cognome = prompt('Inserire cognome');
let colore = prompt('Inserire colore preferito');
let passGen = nome + cognome + colore + '22';
document.getElementById('password').innerHTML = passGen;
