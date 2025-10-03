let qntEstoque = parseInt(prompt("Digite a quantidade disponível em estoque: "))
let maximo = parseInt(prompt("Digite a quantidade máxima desse produto em estoque: "))
let minimo = parseInt(prompt("Digite a quantidade miníma desse produto em estoque: "))
//quantidade media do produto em estoque
let qntMedia = (maximo + minimo)/2


if (qntEstoque >= qntMedia){
    alert("Não efetuar a compra");
}else{
    alert("Efetuar compra");
}