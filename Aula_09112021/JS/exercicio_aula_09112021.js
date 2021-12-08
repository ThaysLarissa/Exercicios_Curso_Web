//Exercicio

const funcionarios = [
    {
        id: 1,
        nome: 'Wally',
        salario: 4800,
    },
    {
        id: 2,
        nome: 'Thays',
        salario: 1693,
    },
    {
        id: 3,
        nome: 'Guilherme',
        salario: 1500,
    },
    {
        id: 4,
        nome: 'Carina',
        salario: 3500,
    },
    {
        id: 5,
        nome: 'Victor',
        salario: 1200,
    },
];



funcionarios.forEach((funcio) => console.log(`Funcionário: ${funcio.nome} têm o sálario $${funcio.salario} reais.`));
//Reajuste
console.log('')
let newSalario = funcionarios.map((novoSalario) =>{
    let reaju = novoSalario.salario * 0.05;

      return reaju + novoSalario.salario;
   
});

console.log(`Com o reajuste: ${newSalario} `)
console.log('')

//Quem recebe => 5000
let filtroSalario = newSalario.filter((salari) =>{
    return salari >= 5000;
})

console.log(`O salário mais alto: ${filtroSalario}`);
console.log('')


//Pesquisar e mostrar o Wally
console.log(funcionarios.find((funcionario) =>{
    console.log('Dados do funcionario:')
    return funcionario.nome === 'Wally';
}));