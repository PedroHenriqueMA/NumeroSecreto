export default {
    tocar,
    pausar,
    mutar,
    resetar
}

const audio = document.querySelector('audio');

function tocar()    { audio.play() }
function pausar()   { audio.pause() }
function mutar()    { audio.mute() }
function resetar()  { audio.pause() ; audio.currentTime = 0}