let a = parseFloat(prompt("Digite o primeiro valor:"));
let b = parseFloat(prompt("Digite o segundo valor:"));
let c = parseFloat(prompt("Digite o terceiro valor:"));

if ((a < b + c) && (b < a + c) && (c < a + b)) {
    if (a === b && b === c) {
        alert("Triângulo Equilátero");
    } else {
        if (a === b || b === c || a === c) {
            alert("Triângulo Isósceles");
        } else {
            alert("Triângulo Escaleno");
        }
    }
} else {
    alert("Não é possível formar um triângulo");
}