let peso, altura, calc, abaixo, ideal, sobrepeso, obesidade1, obesidade2, obesidade3

altura = document.getElementById("altura")
peso = document.getElementById("peso")
let resultado = document.getElementById("result")
abaixo = 18.4
ideal = 24.9
sobrepeso = 29.9
ob1 = 34.9
ob2 = 40
ob3 = 41
calc = peso / (altura * altura)

resultado.innerHTML = calc.toFixed(1)

if(calc <= abaixo){
    resultado.innerHTML("abaixo do peso")
}else if(calc <= ideal){

}else if(calc <= sobrepeso){

}else if(calc <= ob1){

}else if(calc <= ob2){
 
}else if(calc >= ob2){
    
}