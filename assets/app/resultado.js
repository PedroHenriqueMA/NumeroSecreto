import { Confetes } from "./confetes.js";
import { divResult, elementoChute, numeroSecreto } from "./main.js";
import sons from "./sons.js";

export function formataResultado(numero){
    if (numero === numeroSecreto){
        divResult.innerHTML = `
            <h2>Parabéns, Você acertou !!</h2>
            <h3>O número secreto era ${numeroSecreto} <br><br> ^_^ </h3>
            <canvas id="my-canvas"></canvas>
            <audio src="assets/audios/applause.mp3" autoplay></audio>
        `;
        elementoChute.innerHTML = `<div></div>`;
        Confetes();
        sons.tocar()
        return
        
    }else if (numero > numeroSecreto){
        return elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
    else{
        return elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}