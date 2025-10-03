let nome = prompt ("Digite o nome do vendedor")
let salarioFixo = parseFloat (prompt("Digite o salário fixo de "+nome+":R$"))
let carrosVendidos = parseInt (prompt("Digite a quantidade de carros vendidos por "+nome+ ":"))
let comissaoPorCarro = parseFloat (prompt("Digite o valor que "+nome+ "recebe por carro vendido: R$"))
let totalVendas = parseFloat (prompt("Digite o total de vendas feitas por "+nome+ ":R$"))

//calculo do salario final
let salarioFinal = salarioFixo + (comissaoPorCarro * carrosVendidos) + (totalVendas * (5/100))

alert ("O salário final de "+nome+ "é: R$"+salarioFinal)