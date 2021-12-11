
//Revisão JS
let nome = 'Thays' + 'Guilherme' + 'Malik';
let firstname = 'Thays';
let lastname = 'Leal';
let juncao = firstname + lastname;
let frase = 'Estamos fazendo revisão de JS \\ Aprendendo Strings';
let nome1 = 'Jordana';
let exemplo = "IOS é bom de 'mais '";

console.log(exemplo);
console.log(frase);

console.clear();

let comparacao = 10 == 2; //false
let comparacao2 = 100 > 67; // True
let comparacao3 = 34 >= 34; // True
let comparacao4 = 23 == 5; // False
console.log(comparacao, comparacao2, comparacao3, comparacao4);

console.clear();

var exercicio1 = 23 <= 23; // TRUE
var exercicio2 = 33 == 04; //FALSE
var exercicio3 = 12 != 12; // FALSE
var exercicio4 = 634 > 265; // TRUE
var exercicio5 = 33 >= 23; // TRUE
var exercicio6 = 33 <= 43; // TRUE
var exercicio7 = 43 >= 233; // FALSE
var exercicio8 = 22 != 22; // FALSE
console.log(
    exercicio1,
    exercicio2,
    exercicio3,
    exercicio4,
    exercicio5,
    exercicio6,
    exercicio7,
    exercicio8
);


let numero;
// if (numero == undefined) {
//     alert('Variavel numero está indefinida');
// }
let numero2 = 3;
let soma = numero + numero2;
console.log(soma);

console.clear();

var demo = 2;
var demo2 = '2';

var compa = demo == demo2;
var compa2 = demo === demo2;

console.log(compa, compa2);

console.clear();

var demo = 2;
var demo2 = '2';
//FALSE     OU      // FALSE  == TRUE
var Malik = demo == demo2 || demo === demo2;

//FALSE     E      // FALSE  == FALSE

//TRUE     E      // FALSE  == FALSA

//FALSE     OU      // FALSE  == FALSE

//TRUE     OU      // FALSE  == TRUE
var vaiLa = 'Vai mesmo';
var sistema = 33;

function seila() {
    let vaiLa = 'Vou mesmo';
}

function seila2() {
    vaiLa = 'Vou mesmo';
}

function seila3() {
    vaiLa = 'Vou mesmo';
}

if (sistema == 33) {
    vaiLa = 'Estamos aqui';
    alert('Foi mal');
}
console.log(vaiLa);

let vamos = 2;

vamos = '20';

const vamos2 = 2;

vamos2 = 30;

function seiLa() {
    var sistema = 4;
    alert('Somos grandes');

    function seiNao() {
        alert('Somos grandes');
    }

    if (sistema == 4) {
        alert('Passei no IF');
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
}

let sistema = 5;

function seiNao2() {
    alert('Somos grandes');
}