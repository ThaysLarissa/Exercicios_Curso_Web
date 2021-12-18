/// formulário

// Método querySelector
const btn = document.querySelector('.botao');
btn.style.background = 'red';

// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');

const email = document.querySelector('#email');
const msg = document.querySelector('.msg');

const mensagem = document.querySelector('#mensagem'); //campo Cor

const userList = document.querySelector('#users');
const dateMsg = document.querySelector('.msg_data');

// Método addEventListener
myForm.addEventListener('submit', onSubmit);

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();
    // let ano = new Date().getFullYear();

    // const temp = new Date(date.value).getFullYear();

    // let anoInput = parseInt(date.value.split('-')[0], 10) //Transformando string em decimal
    if (nameInput.value === '' || email.value === ''|| mensagem.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha todos os dados.';
        setTimeout(() => msg.remove(), 3000);
    // } else if (ano - temp < 18) {
    //     dateMsg.classList.add('error');
    //     dateMsg.innerHTML = 'Menor de idade';
    //     setTimeout(() => dateMsg.remove(), 3000);
    } else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value}  (${email.value}) : ${mensagem.value}`
            )
        );
        userList.appendChild(li);

        //create span
        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x';
        li.appendChild(mySpan);

        // Botão delete
        const close = document.querySelectorAll('span');
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', () => {
                close[i].parentElement.style.opacity = 0;

                setTimeout(() => {
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
