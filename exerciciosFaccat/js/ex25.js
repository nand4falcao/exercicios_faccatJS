let conta = parseInt(prompt("Digite o número da sua conta corrente: "))
let saldo = parseFloat(prompt("Digite seu saldo na conta corrente: "))
let debito = parseFloat(prompt("Digite seu saldo em débito: "))
let credito = parseFloat(prompt("Digite seu saldo em crédito: "))
let saldoAtual = saldo - debito + credito

alert ("Seu saldo atual é: "+saldoAtual)

if (saldoAtual >= 0){
    alert("Saldo Positivo");
}else{
    alert("Saldo Negativo");
}