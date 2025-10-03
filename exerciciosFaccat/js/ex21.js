let inicial = parseInt(prompt("Qual é a hora inicial do jogo de xadrez? (De 0 a 23) "))
let final = parseInt (prompt("Qual é a hora final do jogo de xadrez? (De 0 a 23)"))
let duracao;

if (final > inicial){
    duracao = (24-inicial) + final;
}else if (inicial > final){
    duracao = (24-inicial) + final;
}else{
    duracao = 24;
}

alert("A duração do jogo foi de " + duracao + " horas.");