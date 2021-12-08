// String, Numbers, Boolean, null, undefined
console.clear();
const pessoa = 'Brunna';
var altura = 1.59;
var peso = 76;
const IMC = peso/altura^2;

/* Template String (é utilizado crase e não aspas simples) -- Esse modo é o mais utilizado*/
const hello = `${pessoa} possui ${altura}m e ${peso}kg, e seu iMC é ${IMC}`;
console.log(hello);