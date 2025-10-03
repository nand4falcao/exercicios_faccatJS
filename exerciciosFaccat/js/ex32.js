let time1 = prompt("Digite o nome do primeiro time: ")
let time2 = prompt("Digite o nome do segundo time: ")
let gols1 = parseInt (prompt("Digite o nome do primeiro time: "))
let gols2 = parseInt (prompt("Digite o nome do segundo time: "))

if (gols1 > gols2){
    alert("O time ganhador foi: "+time1)
}else{
    if (gols2 > gols1){
        alert ("O time ganhador foi: "+time2)
    }else{
        alert("O jogo resultou em EMPATE!")
    }
}
