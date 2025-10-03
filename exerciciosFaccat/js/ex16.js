let macasCompradas = parseInt (prompt("Digite a quantidade de maçãs compradas: "))
let valor;

if (macasCompradas < 12) {
    valor = macasCompradas *1.30;
}else{
    valor = macasCompradas*1.00;
}

alert("O valor das maçãs foi: R$" +valor.toFixed(2));