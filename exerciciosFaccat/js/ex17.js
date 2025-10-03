let n1 = parseFloat(prompt("Digite a nota da primeira avaliação: "))
let n2 = parseFloat(prompt("Digite a nota da segunda avaliação: "))
let media = (n1 + n2)/2

if (media < 6){
    alert("O aluno foi reprovado com a média: " +media.toFixed(2));
}else{
    alert("O aluno foi aprovado com a média: " +media);
}