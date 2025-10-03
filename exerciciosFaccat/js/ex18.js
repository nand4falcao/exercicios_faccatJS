let anoNasc = parseInt(prompt("Qual é o seu ano de nascimento?"))
let voto = 2025 - anoNasc

if (voto < 16){
    alert("Você não pode votar!");
}else{
    alert("Você pode votar!");
}