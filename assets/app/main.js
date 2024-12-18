import { trocarCores } from "./modoEscuro.js";
import { onSpeak } from "./reconhecimentoDeVoz.js";
import sons from "./sons.js";

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
export const menorValor = 0;
export const maiorValor = 100;
export var numeroSecreto = gerarNumeroAleatorio();
export const elementoChute = document.querySelector('#chute');
export const divResult = document.querySelector("#resposta");
const elementoMaiorValor = document.querySelector('#maior-valor');
const elementoMenorValor = document.querySelector('#menor-valor');
const botaoModoEscuro = document.querySelector('#botao-modo-escuro');
const botaoRecomecar = document.querySelector("#botao-recomecar");



elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;


recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start())

botaoModoEscuro.addEventListener('click', () => {
    trocarCores();
})
botaoRecomecar.addEventListener("click", () => {
    numeroSecreto = gerarNumeroAleatorio();
    sons.resetar();
    divResult.innerHTML =`
    <h1>Acerte o número secreto</h1>

    <h3>O número secreto está entre 
        <span id="menor-valor"> 0 </span> 
        e 
        <span id="maior-valor"> 100 </span>
    </h3>
    `;
})

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + menorValor);
}