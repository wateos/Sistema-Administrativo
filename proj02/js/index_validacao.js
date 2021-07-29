
let botao = document.getElementById('logar');
botao.disabled = true;
botao.style.background = 'gray';


let login = document.getElementById('login');
let password = document.getElementById('password');

let loginOK = false;
let passwordOK = false;

function validaLogin() {
    let textLogin = document.getElementById('textLogin');
 
    if (login.value.length < 3) {
       textLogin.innerHTML = 'Login inválido';
       textLogin.style.color = 'red';
       textLogin.style.fontSize = '15px';
       login.style.borderColor = 'red';
       login.style.background = '#fbd2ce';
       loginOK = false;
    }
    else {
       textLogin.innerHTML = 'Login válido';
       textLogin.style.color = 'cadetblue';
       textLogin.style.fontSize = '15px';
       login.style.borderColor = 'green';
       login.style.background = '#d8f3dc';
       loginOK = true;
    }

    validaBotao()
 }

 function validaPassword() {
    let textPassword = document.getElementById('textPassword');
 
    if (password.value.length < 3) {
       textPassword.innerHTML = 'Password inválido';
       textPassword.style.color = 'red';
       textPassword.style.fontSize = '15px';
       password.style.borderColor = 'red';
       password.style.background = '#fbd2ce';
       passwordOK = false;
    }
    else {
       textPassword.innerHTML = 'Password válido';
       textPassword.style.color = 'cadetblue';
       textPassword.style.fontSize = '15px';
       password.style.borderColor = 'green';
       password.style.background = '#d8f3dc';
       passwordOK = true;
    }

    validaBotao()
 }

 
function validaBotao() {
    if (passwordOK == true && loginOK == true) {
       botao.disabled = false;
       botao.style.background = 'cadetblue';
    }
    else {
       botao.disabled = true;
       botao.style.background = 'gray';
    }
 }
 
