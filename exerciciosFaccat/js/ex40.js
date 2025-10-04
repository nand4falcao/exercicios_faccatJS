let produto = prompt("Digite o nome do produto:");
let quantidade = parseInt(prompt("Digite a quantidade comprada:"));
let precoUni = parseFloat(prompt("Digite o valor unitário: R$"));
let = desconto;
let valorFinal = total - desconto;
let total = quantidade * precoUni;

if (quantidade <= 5) {
    desconto = total * 0.02; 
} else if (quantidade > 5 && quantidade <= 10) {
    desconto = total * 0.03; 
} else {
    desconto = total * 0.05;
}

alert("Produto: " + produto +
      "\nQuantidade: " + quantidade +
      "\nPreço unitário: R$" + precoUni.toFixed(2) +
      "\nTotal sem desconto: R$" + total.toFixed(2) +
      "\nDesconto: R$" + desconto.toFixed(2) +
      "\nValor final a pagar: R$" + valorFinal.toFixed(2));
