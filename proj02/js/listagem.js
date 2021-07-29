// Exercício:

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

$nomeConsulta = document.getElementById("aconsulta");

if ($nomeConsulta.textContent == "Consulta") {
   $nomeConsulta.textContent = "Voltar";
   $nomeConsulta.href = './form.php';
}