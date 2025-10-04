let morango = parseFloat(prompt("Digite a quantidade de morangos (kg): "))
let maca = parseFloat(prompt("Digite a quantidade de maçã (kg): "))
let valorMorango;
let valorMaca;
let totalKg = morango + maca;
let valorFinal = valorMorango +valorMaca;
let desconto = valorFinal * 0.10;

if (morango <= 5){
    valorMorango = morango * 2.5
}else{
    valorMorango = morango * 2.2
}

if (maca <= 5){
    valorMaca = maca * 1.8
}else{
    valorMaca = maca * 1.5
}
alert ("O valor a ser pago é: R$"+ valorFinal - desconto);