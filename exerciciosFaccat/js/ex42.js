let codigo = parseInt(prompt("Digite o código do empregado:"));
let anoNasc = parseInt(prompt("Digite o ano de nascimento:"));
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));
let anoAtual = parseInt(prompt("Digite o ano atual:"));
let idade = anoAtual - anoNasc;
let tempoTrabalho = anoAtual - anoIngresso;

alert("Idade: " + idade + " anos");
alert("Tempo de trabalho: " + tempoTrabalho + " anos");

if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
    alert("Requerer aposentadoria");
} else {
    alert("Não requerer");
}