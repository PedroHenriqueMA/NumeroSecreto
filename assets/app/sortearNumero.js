const menorValor = 0;
const maiorValor = 100;

var numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + menorValor);
}