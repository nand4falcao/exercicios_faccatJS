let n1 = parseFloat(prompt("Digite a primera medida: "))
let n2 = parseFloat(prompt("Digite a segunda medida: "))
let n3 = parseFloat(prompt("Digite a terceira medida: "))

if ((n1< n2 + n3) && (n2< n1 + n3) && (n3< n1+n2)){
    alert("Os valores formam um triângulo");
}else{
    alert("Os valores não formam um triângulo");
}