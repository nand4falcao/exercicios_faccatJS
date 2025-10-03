let n1 = parseInt(prompt("Digite o primeiro valor: "));
let n2 = parseInt(prompt("Digite o segundo valor: "));
let n3 = parseInt(prompt("Digite o terceiro valor: "));

if (n1 > n2 && n1 > n3) {
    alert("O maior valor é: " + n1);
} else if (n2 > n1 && n2 > n3) {
    alert("O maior valor é: " + n2);
} else {
    alert("O maior valor é: " + n3);
}