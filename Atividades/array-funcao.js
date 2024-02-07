const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53];

array.forEach((elemento, indice)=>{
    console.log(`${indice} - ${elemento}`)
})//listar
const listardados = (elemento) => comsole.log(elemento)
array.forEach(listardados) //utilizado para iterar sobre os elementos de um array e executar uma função de callback para cada elemento, sem retornar um novo array

// METODO MAP, lista e preserva o arraya orginal e cria um outro array com valores diferentes
console.log(array)
array.map((elemento)=>{
    console.log(elemento * 3)

})
const listarmap =(elemento) => console.log(elemento)
array.map(listarmap)

//FIND
const maiorque30 = array.find((elemento) => {
    return elemento > 30
}) //encontra o PRIMEIRO elemento pedido e imprime ele
console.log(maiorque30)

//FILTER,  vai devolver TODOS os valores pedidos

// const maiorque30 = array.filter((elemento) =>{
//     return elemento > 30
// })
// console.log(maiorque30)

