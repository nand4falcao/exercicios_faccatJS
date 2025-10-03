let n1 = parseInt(prompt("Digite o primeiro valor: "))
let n2 = parseInt(prompt("Digite o segundo valor: "))
let n3 = parseInt(prompt("Digite o terceiro valor: "))
let soma;

if ((n3 < n1) && (n3 < n2)){
    soma = n1 + n2;
    alert("Os maiores valores são: "+ n1+ " e " +n2+ "e a soma deles é: "+ soma);
}else{
    if ((n2< n3) && (n2< n1)){
    soma = n1 + n3;
    alert("Os maiores valores são: "+ n1+ " e " +n3+ "e a soma deles é: "+ soma);
}else{
    soma = n2 + n3
    alert("Os maiores valores são: "+ n2+ " e " +n3+ "e a soma deles é: "+ soma);
}
}