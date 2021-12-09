//Exercicio DOM - PARTE 1: MOSTRAR ESTAÇÕES DOS MESES DO ANO

function button(){
    let mes = window.prompt('Informe o mês do Ano');       
    let h3 = document.createElement('H3');
    document.body.appendChild(h3);
 
    if(mes == 'Janeiro' || mes == 'Fevereiro' || mes == 'Março'){
        //Inverno
        h3.innerHTML = `No mês de ${mes} a estação do ano é o(a) Inverno `;
        h3.style.backgroundColor = '#019fe6';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#fff';

    }else if(mes == 'Abril' || mes == 'Maio' || mes == 'Junho'){
        //Primavera
        h3.innerHTML = `No mês de ${mes} a estação do ano é o(a) Primavera `;
        h3.style.backgroundColor = '#76c104';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#fff';

    }else if(mes == 'Julho' || mes == 'Agosto' || mes == 'Setembro'){
        //Verão
        h3.innerHTML = `No mês de ${mes} a estação do ano é o(a) Verão `;
        h3.style.backgroundColor = '#fea607';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#fff'

    }else if(mes == 'Outubro' || mes == 'Novembro' || mes == 'Dezembro'){
        //Outono
        h3.innerHTML = `No mês de ${mes} a estação do ano é o(a) Outono`;
        h3.style.backgroundColor = '#c44c72';
        h3.style.borderBottom = '2px solid #000';
        h3.style.color = '#fff';
    }
}