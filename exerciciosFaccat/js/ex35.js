let tipoCombustivel = prompt("Digite o tipo de combustível (A - Álcool e G - Gasolina):");
let litros = parseFloat(prompt("Digite os litros de combustível:"));
let valor;
let desconto;
let valorFinal;

if (tipoCombustivel === "A") {
    // Álcool
    valor = litros * 2.9;
    if (litros <= 20) {
        desconto = 0.03; // 3%
    } else {
        desconto = 0.05; // 5%
    }
} else if (tipoCombustivel === "G") {
    // Gasolina
    valor = litros * 3.3;
    if (litros <= 20) {
        desconto = 0.04; // 4%
    } else {
        desconto = 0.06; // 6%
    }
} else {
    alert("Tipo de combustível inválido!");
}

valorFinal = valor - (valor * desconto);

alert("O valor final a se pagar é: R$ " + valorFinal.toFixed(2));
