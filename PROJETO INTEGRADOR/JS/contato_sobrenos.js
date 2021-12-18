/// formulário

// Método querySelector
const btn = document.querySelector('.botao');

// Busca pelos elementos do Formulário
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');

const email = document.querySelector('#email');
const msg = document.querySelector('.msg');

const assunto = document.querySelector('#assunto');

const mensagem = document.querySelector('#mensagem'); //campo MENSAGEM

const userList = document.querySelector('#users');

// Método addEventListener
myForm.addEventListener('submit', onSubmit);

// Função onSubmit Sugestões da page livros
function onSubmit(e) {
    e.preventDefault();

    if (
        nameInput.value === '' ||
        email.value === '' ||
        assunto.value === '' ||
        mensagem.value === ''
    ) {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha todos os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value}  (${email.value}) -   ${assunto.value} : ${mensagem.value}        `
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
                    close[i].parentElement.style.display = 'visible';
                    close[i].parentElement.remove();
                }, 500);
            });
        }
        // Limpa o formulário
        nameInput.value = '';
        mensagem.value = '';
        assunto.value = '';
        email.value = '';
        email.getElementsByTagName('li')[0].selected = 'selected';
        nameInput.focus(); //Coloca o foco no elmento
    }
}
