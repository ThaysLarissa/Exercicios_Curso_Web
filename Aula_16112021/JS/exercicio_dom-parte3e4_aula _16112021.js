// DOM - PARTE 4: Formulário

// Método querySelector: colocar cor no botão "Enviar"
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Busca   elementos do Formulário
const myForm = document.querySelector('#my-form'); //Formulario
const nameInput = document.querySelector('#name'); //Campo nome
const emailInput = document.querySelector('#email'); //Campo Data de Nascimento
const horario = document.querySelector('#horario'); //campo Cor
const msg = document.querySelector('.msg'); //msg do Campo nome
const msg_email = document.querySelector('.msg_email'); // msg do campo Data de Nascimento
const userList = document.querySelector('#users'); // usuários

// Método addEventListener: Adicionando Evendo (onSubmit)
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();
    let ano = new Date().getFullYear()

    const temp = new Date(email.value).getFullYear()
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
  

    }else if((ano - temp) < 18){
            emailMsg.classList.add('error'); 
            emailMsg.innerHTML = 'Menor de idade';
            setTimeout(() => emailMsg.remove(), 3000);
    
    }else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
        document.createTextNode(
                `${nameInput.value}, nascido(a) em ${emailInput.value} e de cor ${horario.value}`
            )
        );
        
        
         userList.appendChild(li);
        
        //create span
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x'
        li.appendChild(mySpan); 

        // Botão delete
        const close = document.querySelectorAll('span');
        for(let i=0; i < close.length; i++){
            close[i].addEventListener('click', () =>{
                close[i].parentElement.style.opacity = 0;
                
                setTimeout(() =>{
                    close[i].parentElement.style.display = 'none';
                    close[i].parentElement.remove();
    
                }, 500);
            });
        }
         // Limpa o formulário
            nameInput.value = '';
            email.value = '';
            email.getElementsByTagName('li')[0].selected = 'selected';
            nameInput.focus(); //Coloca o foco no elmento
    }
}
