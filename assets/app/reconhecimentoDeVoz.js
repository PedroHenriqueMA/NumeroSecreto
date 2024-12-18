import { elementoChute } from "./main.js";
import { verificaValidadeChute } from "./validacao.js";

export function onSpeak(e){
    var chute = e.results[0][0].transcript;

    exibeChuteNaTela(chute);
    verificaValidadeChute(chute);
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}