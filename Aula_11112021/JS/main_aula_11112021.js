//CLASSES

class Carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
}

//Instanciando (dando nomes valoes dos )Objetos a classes

let meuCarro1 = new Carro('Ford', 2018);
let meuCarro2 = new Carro('Corsa', 2003);

//Imprimindo as Informações

console.log(meuCarro1);
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);

console.log(meuCarro2);
console.log(meuCarro2.nome);
console.log(meuCarro2.ano);


// ou

class NovoCarro{
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }

    idadeCarro(ano){
        return ano - this.ano;
    }
}

// Buscando a Data atual

let dataHoje = new Date();
let ano = dataHoje.getFullYear(); //


//Instanciando meuNovoCarro


let meuNovoCarro = new NovoCarro ('Corsa', 2003);

console.log(meuNovoCarro.idadeCarro(ano) + ' anos');

console.log(dataHoje);

console.clear();

//Criando uma nova Classe

class ClassePessoa{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return this.firstName, this.lastName;
  }

  /*Outra forma de criar um metodo (com this ou nome de variável)
  
  const/let getFullName = () => {
    return this.firstName, this.lastName;
  }*/
}

//Instanciar um objeto Pessoa

let pessoa1 = new ClassePessoa('irmão do ', 'Jorel', '2007-05-08');
let pessoa2 = new ClassePessoa('Pipoca', 'Animada', '1970-06-07');

console.log(pessoa1);
console.log(pessoa1.dob.getFullYear());
console.log(pessoa1.getBirthYear());
console.log(pessoa1.getFullName());

//PROTOTYPE

PessoaFunc.prototype.getBirthDayMonth = function () { 

    let dados = [this.dob.getDate(), this.dob.getMonth() + 1]; 
    
    return dados; 
    
    }; 
    
     
    
    PessoaFunc.prototype.getFirstName = function () { 
    
    return `${this.firstName}`; 
    
    }; 