const carros = require('./listaCarros')

let carroBarato = 0;

for(atualCarro = 0; atualCarro < carros.length; atualCarro++){
    if(carros[atualCarro] < carros[carroBarato]){
        carroBarato += atualCarro;
    }

}

console.log(carros[carroBarato])