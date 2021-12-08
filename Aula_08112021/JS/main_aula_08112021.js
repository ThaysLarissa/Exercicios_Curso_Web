//CONCATENANDO STRING
//CONCATENANDO STRING

let string = 'Institudo da Oportunidade Social';

// Acessando o primeiro caracter
console.log(string.charAt(3));
console.log(string[0]);

console.clear();

let texto = 'Heloisa'
console.log (texto.length);

//METODOS STRINGS
console.clear();

let s = 'Helo world!'
console.log(s.toUpperCase());

let d = 'Helo world!'
console.log(d.toLowerCase());

//SUBSTRINGS
console.clear();

let str = 'Heloisa';
console.log(str.substring(0, 4))
console.log(str.substring(4));

//SPLIT
console.clear();

const str1 = 'A raposa é um animal espero';

const palavras = str1.split(' ')
console.log(palavras[3]); //um

console.clear();

let mensagem = 'Venha para a Microsoft'
console.log(mensagem);

let novamensagem = mensagem.replace ('Microsoft', 'IOS')
console.log(novamensagem);

console.clear();

let text = '    Olá Alunas do IOS!    '
console.log(text);
console.log(text.trim());

console.clear();

let frase = 'Sou um aluno do IOS e o IOS pe muito bom!'

console.log(frase.indexOf('do')); //13
console.log(frase.indexOf('IOS')); //16

console.log(frase.lastIndexOf('IOS')); //24


console.log(frase.startsWith('S')); //true
console.log(frase.startsWith('D')); //false

console.log(frase.endsWith('!')); //true
console.log(frase.endsWith('Sou')); //false
