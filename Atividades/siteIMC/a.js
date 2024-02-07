let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let resultado = document.getElementById('result')


const btn = document.getElementById('btn')
btn.addEventListener('click', () =>{

let alt = altura.value
alt = Number(alt)
let pes = peso.value //transformando as entradas em números
pes = Number(pes)
let calc = pes / (alt * alt) // calculo IMC

if(calc <= 18.4 && calc >= 17){
    resultado.innerHTML = `seu IMC é de: ${calc}, você esta severamente abaixo do peso`
}
else if (calc < 16.9){
    resultado.innerHTML = `seu IMC é de: ${calc}, você esta abaixo do peso`
}
else if(calc <= 24.9 && calc >= 18.5){
    resultado.innerHTML = `seu IMC é de: ${calc}, você esta no peso ideal`
}
else if(calc <= 29.9 && calc >= 25){
    resultado.innerHTML = `seu IMC é de: ${calc}, você esta acima do peso`
}
else if(calc <= 34.9 && calc >= 30){
    resultado.innerHTML = `seu IMC é de: ${calc}, você esta com obesidade tipo I`
}
else if(calc <= 40 && calc>= 35){
    resultado.innerHTML = `seu IMC é de: ${calc}, você esta com obesidade tipo II`
}
else if(calc > 40){
    resultado.innerHTML = `seu IMC é de: ${calc}, você esta com obesidade tipo III`
}
console.log(calc)
}
)