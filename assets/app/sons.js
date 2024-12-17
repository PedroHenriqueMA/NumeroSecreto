const aplausos = new Audio('assets/audios/applause.wav');

function tocar(audio)    { audio.play() }
function pausar(audio)   { audio.pause() }
function mutar(audio)    { audio.mute() }
function resetar(audio)  { audio.pause() ; audio.currentTime = 0}