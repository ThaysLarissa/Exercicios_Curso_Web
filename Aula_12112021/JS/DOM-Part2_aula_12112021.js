//DOM (Document Object Model) - Parte 2

//Metodo getElementById

let titulo = document.getElementById('titulo');

//Alterando o conteudo do elemento id='titulo'
titulo.innerHTML = 'Olá meus caros alunos!';

//Configurando o estilo CSS do elemento id='titulo'
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

//Metodo getElementByClassName

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);

//Configurando o estilo CSS do elemento classe='items'
/*items[0].textContent = 'Hello 2';
items[0].style.fontWeigth = 'bold';
items[0].style.backgroundColor = 'yellow';*/

//Utilizando o laço de repetição "for" para alterar todos os elementos do HTML
/*for (let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'yellow';
}*/

//Metodo getElementByTagName
let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = '#4f2eeb';
    else li[i].style.backgroundColor = '#fff';
}

//Metodo getElementsByName
let nome = document.getElementsByName('fitem');
console.log(nome);

nome[0].textContent = 'Olá Pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#8AC1FB';

//Remover elemento pelo DOM
let item2 = document.getElementById('items');
item2.remove();


//Retornar elemento
let lista = document.getElementById('items');
let item1 = document.getElementById('items');

lista.insertBefore(item2, item1.nextSibling);