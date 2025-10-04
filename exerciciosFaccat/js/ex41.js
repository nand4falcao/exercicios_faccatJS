let nome = prompt("Digite o nome do(a) aluno(a):");
let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
let media = parseFloat(prompt("Digite a média dos exercícios de " + nome + ":"));
let mediaFinal = (n1 + (n2 * 2) + (n3 * 3) + media) / 7;

if (mediaFinal >= 9) {
    alert("A média final de " + nome + " foi: " + mediaFinal.toFixed(2) + 
          "\nCom aproveitamento A!");
} else if (mediaFinal >= 7.5) {
    alert("A média final de " + nome + " foi: " + mediaFinal.toFixed(2) + 
          "\nCom aproveitamento B!");
} else if (mediaFinal >= 6) {
    alert("A média final de " + nome + " foi: " + mediaFinal.toFixed(2) + 
          "\nCom aproveitamento C!");
} else {
    alert("A média final de " + nome + " foi: " + mediaFinal.toFixed(2) + 
          "\nCom aproveitamento D!");
}