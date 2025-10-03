let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário: R$ "))
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%)"))

//calculo do novo salario
let novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100))

alert ("O novo salário do funcionário é: R$ " + novoSalario.toFixed(2))