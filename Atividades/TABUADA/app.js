const inNumero = document.querySelector(`#inNumero`)
const outTabuada = document.querySelector(`#outTabuada`)
const btnMostrar = document.querySelector(`#btnMostrar`)

btnMostrar.addEventListener('click', ()=>{
    let numero = Number(inNumero.value)

    if(numero === 0 || isNaN === (numero)){
        alert('Número inválido.')
        inNumero.focus();
        return
    }

    for(let i = 1; i<= 10; i++){
        console.log(numero * i)
    }
})