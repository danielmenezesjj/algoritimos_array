const livros = require('./listaLivros')

let maisCaro = 0;

for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco > livros[maisCaro].preco){
    maisCaro = atual;
    }
}
console.log(`o livro mais caro é de valor: ${livros[maisCaro].preco}`)