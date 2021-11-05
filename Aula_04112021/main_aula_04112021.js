1	// Estrutura condicional simples
// Igual duplo
const a = 8;
if (a == 10) {
    console.log('a é 10');
}

else {
    console.log('a não é 10');
}

const b = '10';
if (b == 10) {
    console.log('b é 10');
}

else {
    console.log('b não é 10');
}


// Estrutura condicional encadeada
// Igual duplo

const c = 16;
if (c == 10) {
    console.log('c é 10');
}

else if (c > 10) {
        console.log('c não é igual e é maior que 10');
}

else{
        console.log('c não é igual e nem maior que 10');
}



const d = 6;
if (d == 10) {
    console.log('d é 10');
}

else if (d > 10) {
        console.log('d não é igual e é maior que 10');
}

else{
        console.log('d não é igual e nem maior que 10');
}



// Switch

const nota = 6;

switch (nota){

    case 4:
        console.log("Reprovado!");
        break;

        case 6:
        console.log("Recuperação!");
        break;

        default:
        console.log("Nota desconhecida!");
        break;
}




// Ternario

let e = b == 10 ? "É igual a 10" : "São diferentes";
console.log(e);

let resultado = 3 != 4 ? "3 é diferente de 4" : "3 é igual a 4";