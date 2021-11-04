
const frutas1 = ['Joaquim', 'José', 'Silva', 'Xavier'];
console.log(frutas1);

// Inserir e Amanda
console.clear();
const frutas4 = ['Banana', 'Laranja'];
let w = frutas4.unshift('Kiwi'); // w = 3

console.log(frutas4);
console.log(w);

// Remover e Amanda
console.clear();
const frutas3 = ['Banana', 'Laranja'];
let z = frutas3.shift(); // z = 'Banana'

console.log(frutas3);
console.log(z);

// Remover e Xavier
// pop()
let x = frutas1.pop(); // x = "Xavier saiu"

console.log(frutas1);
console.log(x) ;



// Inserir e Zuleica
// push()

const frutas2 = ['Joaquim', 'José', 'Silva'];
let y = frutas2.push('Zuleica'); // y = Zuleica

console.log(frutas2);
console.log(y);


// delete Silva e entra a Silvana
console.clear();
const frutas5 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
delete frutas5[2];

console.log(frutas5);

