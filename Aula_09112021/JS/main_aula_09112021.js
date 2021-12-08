//Metodo forEach()

const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);

function minhaFuncao(item, index){
    console.log('Indice: ' + index);
    console.log('Elemento: ' + item);
}

//Metodo forEach() com Arrow Functon (mesma ideia porem com metodo mais sofisticado)

console.clear();

const frutas01 = ['apple', 'orange', 'cherry'];
frutas.forEach((index, item) => {
    console.log('Indice: ' + index);
    console.log('Elemento: ' + item);
});




//forEach () com arrays de objetos

console.clear();

const tarefas = [
    {
        id: 1,
        texto: 'Levar o lixo ara fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'Encontrar o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'Cconsulta no dentista',
        isCompleted: false,
    },
    
];

tarefas.forEach((teste) => console.log(teste.texto));

//Metodo map (retorna um novo Array - a raiz quadrada os numeros informados no array original)

console.clear();

const numeros = [4, 9, 16, 25];
const newArrays = numeros.map(Math.sqrt);

console.clear();
console.log('Numeros: ');
console.log(numeros);
console.log('Novo Array: ');

console.log(newArrays);

//ou

const mapText = tarefas.map((valor) => {
    return valor.texto;
}); 
console.log(mapText); //Array de objetos transformado em Array de texto


//Metodo filter

console.clear();

const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => { 
    return idade >= 18;});
    console.log(filtroIdade);

// ou

const filtroCompletas = tarefas.filter((item) => {
    return item.isCompleted; //===true
});
console.log(filtroCompletas);

    //Metodo find

    console.clear();

    const meuArray = [
        {nome: 'apples',quantidade: 2},
        {nome: 'bananas',quantidade: 0},
        {nome: 'cherrys',quantidade: 5},
    ];
    console.log(
        meuArray.find((frutas) => {
            return frutas.nome === 'cherrys'
        })
    );

    //teste map com array de objetos
    console.clear();
    let testeMap = meuArray.map((fruit) => {
        let novo = Object.assign({}, fruit);
        novo.quantidade++;

        return novo;
    });

    console.log('Antes: ');
    console.log(meuArray);
    console.log('Adicionando 1 unidade de cada fruta: ');
    console.log(testeMap);