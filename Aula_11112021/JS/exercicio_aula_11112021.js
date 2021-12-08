//CLASSES - exercicio

class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, tipoConta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.tipoConta = tipoConta;
    }
    
    contaPoupanca(tipoConta){
        return this.salario - (this.salario * 0.015);
    };

    contCorrente(tipoConta){
        return this.salario - (this.salario * 0.036);
    };

    contaEstudante(tipoConta){
        return this.salario - (this.salario * 0.012);
    };

    contaDesconto(){
        return this.contaEstudante()
    }

}

let aluna = new contaBancaria('Thays', '25', 1693, 'Feminino', 'Banco Pipoca','321', 'contaEstudante');

console.log(aluna);
console.log(`Com os descontos da Conta Estudante, o novo salário dela será de R$`, aluna.contaEstudante());