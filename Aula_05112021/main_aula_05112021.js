//INCREMENTAÇÃO

let contador = 1;

while (contador <= 10){
    console.log('valor = ' + contador);
    contador++; //contador = contador + 1 (ou "n" para incrementar com um intervalo ão sequencial)
}

//WHILE ESTRUTURA DE REPETIÇÃO - DECREMENTAÇÃO
    let contador2 = 10;

    while (contador2 >= 0){
        console.log('Valor = ' + contador2);
        contador2 = contador2 - 1;
    }

    //DO-WHILE ESTRUTURA DE REPETIÇÃO
    let i = 0;
        text = '';

    do {
        text += 'o numero é ' + i + '\n';
        i++;
    }while (i < 10);
    console.log(text)

    console.clear();

    // FOR LAÇO DE REPETIÇÃO
    for (let i= 0; i <= 10; i = i + 1 ) //ou i++ ou i-- para decrementar
    //{
        //if (i == 6){
            //console.log('Será que vai?')
        //}
    //}
    console.log('Laço for numero: ' + i);

    console.clear();
    
    //LAÇOS DE REPETIÇÃO COM ARRAYS (mostrar quem está em qual posição)
    const frutas = ['maça', 'laranja', 'melancia', 10, true];

    console.log(frutas);

    for(let j = 0; j < frutas.length; j++)
    console.log('O nome da fruta é: ' + frutas[j]);
 