let nome = prompt ("Digite o nome do(a) aluno (a): ")
let n1 = parseFloat (prompt("Digite a primeira nota:"))
let n2 = parseFloat (prompt("Digite a segunda nota:"))
let n3 = parseFloat (prompt("Digite a terceira nota:"))
let mediaFinal = ((n1 * 2)+(n2 * 3)+(n3 * 5) /10)

alert("A média final de "+nome+ "é: " +mediaFinal.toFixed(2))