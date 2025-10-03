let nome = prompt("Digite o nome do colaborador")
let salarioFixo = parseFloat(prompt("Digite o valor do salário fixo de "+ nome))
let vendas = parseFloat(prompt("Digite o valor total das vendas efetuados por "+ nome))
let comissao;

if (venda <= 1500){
    comissao = vendas * (0.03);
} else{
    comissao = vendas * (0.03) + (vendas - 1500) * (0.05);
}

let salarioTotal = salarioFixo + comissao

alert ("O salário final de "+nome+ "é: "+ salarioTotal)