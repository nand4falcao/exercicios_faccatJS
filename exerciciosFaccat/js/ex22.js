let horasMes = parseFloat(prompt("Digite o número de horas trabalhadas no mês pelo colaborador: "));
let salarioHora = parseFloat(prompt("Digite o valor do salário por hora: "));
let horasExtras;

// calculo de horas extras
if (horasMes > 160) {
  horasExtras = horasMes - 160;
} else {
  horasExtras = 0;
}

// Valor da hora extra
let valorHoraExtra = salarioHora * 1.5;

// calculo do salário total
let salarioTotal = (160 * salarioHora) + (horasExtras * valorHoraExtra);

alert("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2));
