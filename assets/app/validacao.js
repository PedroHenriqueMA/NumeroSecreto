import { formataResultado } from "./resultado.js"
import { elementoChute, maiorValor, menorValor } from "./main.js"

export function verificaValidadeChute(chute){
    const numero =+ chute
/* =+ serve para tornar 'numero=NaN' se o chute for diferente de um numero por n ser possivel somar*/
    if (chuteNaoEUmNumero(numero)){
        return elementoChute.innerHTML += `<div>"${chute}" não é um numero T-T</div>` 
        
    }if (chuteForaDoLimite(numero)){
        return elementoChute.innerHTML += `<div>Lembre que o Numero Secreto está entre ${menorValor} e ${maiorValor} :/ </div>`
        
    }else{
        formataResultado(numero)
    }
}

function chuteNaoEUmNumero(numero) {
    return Number.isNaN(numero)
}
function chuteForaDoLimite(numero){
    return numero > maiorValor || numero < menorValor
}