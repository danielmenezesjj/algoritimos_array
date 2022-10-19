const pessoa = require('./listaPessoa')


let pMaisnova = 0;
for(let pAtual = 0; pAtual < pessoa.length; pAtual++){
    if(pessoa[pAtual] < pessoa[pMaisnova]){
        pessoa += pMaisnova;
    }
    
}
console.log(pessoa[pMaisnova]);