let n1 = parseInt(prompt("Digite o primeiro valor:"))
let n2 = parseInt(prompt("Digite o segundo valor:"))
let n3 = (n1 * n2) + 5

alert ("O terceiro valor  é: "+n3)

if (n3 <= 0){
    alert("A resposta é A")
}else{
    if (n3 <= 100){
        alert("A resposta é B")
    }else{
        alert("A resposta é C")
    }
}

  //n1   n2   n3    Resposta
   //3    2    11        B
   //0    3    5         B
   //7   -1   -2         A
   //-2   5   -5         A
   //50   3   155        C