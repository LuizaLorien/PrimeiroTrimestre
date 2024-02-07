// // //att 1
// let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
// let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];


// function combinar(produtos, precos){
//     return produtos.map((produto) => {
//         let precoprod = precos.find((preco) => preco.nome === produto.nome);

//         return{
//             nome: produto.nome,
//             categoria: produto.categoria,
//             preco: precoprod.preco
//         };
//     });

// }
// // //att2
// function buscarcategoria(arraydeproduto, categoria) {
//     return arraydeproduto.filter ((produto) => produto.categoria === categoria)
// }
// const categoriaproduto = buscarcategoria(combinar, "roupas");
// console.log(buscarcategoria)
// //att03
