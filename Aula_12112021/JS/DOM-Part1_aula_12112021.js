//Objeto Window
/*console.log(window);

window.alert('Olá Mundo!');
alert('Olá Mundo!');*/

// Objeto document
console.log(document);

//Alterar o <title>
document.title = ' DOM-Part1';

// Criar um elemento <h1> 
let heading = document.createElement('H1'); 
heading.innerHTML = 'Olá Mundo!'; 
document.body.appendChild(heading); 
heading.style.borderBottom = 'solid 3px #000'; 

let p = document.createElement('BUTTON');
p.innerHTML = 'Aceitar';
document.body.appendChild(p);
p.style.backgroundColor = '#ffcb1b';


let c = document.createElement('p');
c.innerHTML = 'Estamos endentendo DOM';
document.body.appendChild(c);
c.style.color = '#00ffff';