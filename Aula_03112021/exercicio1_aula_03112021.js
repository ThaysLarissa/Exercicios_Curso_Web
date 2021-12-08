
const frutas1 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let a = frutas1

console.log(frutas1);



// Inserir e Amanda
//unshift
const frutas2 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let w = frutas2.unshift('Amanda'); // w = 3

console.log(frutas2);


// Remover e Amanda
//shift
const frutas3 = ['Amanda', 'Joaquim', 'José', 'Silva', 'Xavier'];
let z = frutas3.shift(); // z = 'Amanda'

console.log(frutas3);

// Remover e Xavier
// pop()
const frutas4 = ['Joaquim', 'José', 'Silva', 'Xavier'];
let x = frutas4.pop(); // x = "Xavier saiu"

console.log(frutas4);



// Inserir e Zuleica
// push()
const frutas5 = ['Joaquim', 'José', 'Silva'];
let y = frutas5.push('Zuleica'); // y = Zuleica

console.log(frutas5);


// Remover Silva e inserir a Silvana
//delete
const frutas6 = ['Joaquim', 'José', 'Silva', 'Zuleica'];
delete frutas6[2];

console.log(frutas6);


const frutas7 = ['Joaquim', 'José', 'Silvana', 'Zuleica'];
let b = frutas7

console.log('Ficaram ' + b.length + ' pessoas na festa, que eram: ' + frutas7);


