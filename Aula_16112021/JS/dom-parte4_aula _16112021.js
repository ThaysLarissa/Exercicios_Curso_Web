// DOM - PARTE 4: Formulário

// Método querySelector: colocar cor no botão "Enviar"
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Busca   elementos do Formulário
const myForm = document.querySelector('#my-form'); //Formulario
const nameInput = document.querySelector('#name'); //Campo nome
const emailInput = document.querySelector('#email'); //Campo email
const horario = document.querySelector('#horario'); //campo horário
const msg = document.querySelector('.msg'); //msg do nome
const msg_email = document.querySelector('.msg_email'); // msg do email
const userList = document.querySelector('#users'); // usu[ários

// Método addEventListener: Adicionando Evendo (onSubmit)
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${horario.value}`
            )
        );
        userList.appendChild(li);
        // Limpa o formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //Coloca o foco no elmento
    }
}

// Validando e-mail
emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@.*\..*/i);
    if (!padrao.test(emailInput.value)) {
        // alert('Por favor, insira um e-mail válido.');
        msg_email.classList.add('error');
        msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
        setTimeout(() => msg.remove(), 3000);
    }

});