// MÉTODO PARA MOSTRAR A DATA COMPLETA NO RODAPÉ

let botao = document.getElementById('btn');
botao.disabled = true;
botao.style.background = 'gray';

let saudacao;
let saudacaoFinal;
let hoje = new Date
let hora = hoje.getHours();
var minuto = hoje.getMinutes();
var segundo = hoje.getSeconds();

let nomesDia = new Array ("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado-Feiras");
let nomesMes = new Array ("janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro");

if (hora == 0 && hora <= 6) {
   saudacao = "Boa madrugada!";
}
else if (hora > 6 && hora <= 12) {
   saudacao = "Bom dia!";
}
else if (hora > 12 && hora <= 18) {
   saudacao = "Boa tarde!";
}
else if (hora > 18 && hora < 24) {
   saudacao = "Boa noite!";
}

let horario = hora + ":" + minuto + ":" + segundo;
let data = " Hoje é " + nomesDia[hoje.getDay()] + ", " + hoje.getDate() + " de " + nomesMes[hoje.getMonth()] + " de " + hoje.getFullYear();

saudacaoFinal = saudacao + data + " - " + horario;

console.log(saudacao)
console.log(saudacaoFinal)

div.textContent = saudacaoFinal;

// MÉTODO PARA VALIDAR OS CAMPOS ANTES DE ENVIAR VIA POST PARA O CADASTRO.PHP

let nome = document.getElementById('nome');
let email = document.getElementById('email');
let idade = document.getElementById('idade');
let url = document.getElementById('url');

let nomeOK = false;
let emailOK = false;
let idadeOK = false;
let urlOK = false;

function validaNome() {
   let txtNome = document.getElementById('txtNome');

   if (nome.value.length < 3) {
      txtNome.innerHTML = 'Nome inválido';
      txtNome.style.color = 'red';
      txtNome.style.fontSize = '15px';
      nome.style.borderColor = 'red';
      nome.style.background = '#fbd2ce';
      nomeOK = false;
   }
   else {
      txtNome.innerHTML = 'Nome válido';
      txtNome.style.color = 'cadetblue';
      txtNome.style.fontSize = '15px';
      nome.style.borderColor = 'green';
      nome.style.background = '#d8f3dc';
      nomeOK = true;
   }

   validaBotao();
}

function validaEmail() {
   let txtEmail = document.getElementById('txtEmail');

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
      txtEmail.innerHTML = 'E-mail inválido';
      txtEmail.style.color = 'red';
      txtEmail.style.fontSize = '15px';
      email.style.borderColor = 'red';
      email.style.background = '#fbd2ce';
      emailOK = false;
   }
   else {
      txtEmail.innerHTML = 'E-mail válido';
      txtEmail.style.color = 'cadetblue';
      txtEmail.style.fontSize = '15px';
      email.style.borderColor = 'green';
      email.style.background = '#d8f3dc';
      emailOK = true;
   }

   validaBotao();
}

function validaIdade() {
   let txtIdade = document.getElementById('txtIdade');

   if (idade.value > 0 && idade.value <= 100) {
      txtIdade.innerHTML = 'Idade válida';
      txtIdade.style.color = 'cadetblue';
      txtIdade.style.fontSize = '15px';
      idade.style.borderColor = 'green';
      idade.style.background = '#d8f3dc';
      idadeOK = true;
   }
   else {
      txtIdade.innerHTML = 'Idade inválida';
      txtIdade.style.color = 'red';
      txtIdade.style.fontSize = '15px';
      idade.style.borderColor = 'red';
      idade.style.background = '#fbd2ce';
      idadeOK = false;
   }

   validaBotao();
}

function validaUrl() {
   let txtUrl = document.getElementById('txtUrl');

   if (url.value.length < 12) {
      txtUrl.innerHTML = 'URL inválido';
      txtUrl.style.color = 'red';
      txtUrl.style.fontSize = '15px';
      url.style.borderColor = 'red';
      url.style.background = '#fbd2ce';
      urlOK = false;
   }
   else {
      txtUrl.innerHTML = 'URL válido';
      txtUrl.style.color = 'cadetblue';
      txtUrl.style.fontSize = '15px';
      url.style.borderColor = 'green';
      url.style.background = '#d8f3dc';
      urlOK = true;
   }

   validaBotao();
}

function validaBotao() {
   if (nomeOK == true && emailOK == true && idadeOK == true && urlOK == true) {
      botao.disabled = false;
      botao.style.background = 'cadetblue';
   }
   else {
      botao.disabled = true;
      botao.style.background = 'gray';
   }
}

