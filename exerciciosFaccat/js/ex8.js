let total = parseInt(prompt("Digite o número total de votos: "))
let nulos = parseInt(prompt("Digite o número de votos nulos: "))
let brancos = parseInt(prompt("Digite o número de votos brancos: "))
let perNulos = (nulos/total) * 100
let perBrancos = (brancos/total) * 100
let perValidos = ((total - nulos - brancos) / total) * 100

alert("A porcentagem de votos válidos é: "+perValidos+"%")
alert("A porcentagem de votos nulos é: "+perNulos+"%")
alert("A porcentagem de votos brancos é: "+perBrancos+"%")