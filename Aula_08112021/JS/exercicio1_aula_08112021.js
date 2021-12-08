// MEDIA
const alunas = [
    {
        id: 1,
        firstName: 'Thays',
        lastName: 'Leal',
        idade: '25',
        materiaDestaque: 'Programação',
        notas:[10, 10, 10, 9.5, 10, 8],
        endereço:['Rua João Rubio', 33, ' SP'],
    },
    {
        id: 2,
        firstName: 'Brunna',
        lastName: 'Vicente',
        idade: '30',
        materiaDestaque: 'Comunicação',
        notas:[8, 10, 10, 10, 7, 5],
        endereço:['Rua Joaquim Afonso de Souza', 80, ' SP'],

    },
    {
        id: 3,
        firstName: 'Neide',
        lastName: 'Arruda',
        idade:'28',
        materiaDestaque: 'Química',
        notas:[10, 8, 6, 8, 5, 7],
        endereço:['Rua Vera Cruz', 506,' SP'],
    },
];


for(let aluna = 0; aluna < alunas.length; aluna++){ //Aqui irá percorrer as alunas e seus array
    let nota = alunas[aluna].notas;
    let total = 0;
    for(let i = 0; i < nota.length; i++ ){ // irá percorrer os array dos arrays
        total = total + nota[i]; // Para somar as notas
        media = total / nota[i] // para dividir as notas pela contidade de notas
        function alunaMedia(mediaTotal = media){
            if (mediaTotal > 7){
                return 'Aprovada'
            }else{
                return 'Reprovada'
            }
        }
        
    }   
    
    console.log(`Aluna ${alunas[aluna].firstName} com as notas (${alunas[aluna].notas}), mora no endereço: ${alunas[aluna].endereço}. Teve a média ${media}, portanto foi ${alunaMedia()}`);
}
    
console.log('')