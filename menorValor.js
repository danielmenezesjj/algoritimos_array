const livros = require('./listaLivros')

function maisBarato (arrProdutos, posicaoInicial){
    let menorValor = posicaoInicial;

for(let atual = 0; atual < arrProdutos.length; atual++){
    if(arrProdutos[atual].preco < arrProdutos[menorValor].preco)
    menorValor = atual;
}
return menorValor;

}

module.exports = menorValor;