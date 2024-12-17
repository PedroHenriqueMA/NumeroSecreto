const botaoRecomecar = document.querySelector("#botao-recomecar");
botaoRecomecar.addEventListener("click", () => {
    numeroSecreto = gerarNumeroAleatorio();
    resetar(aplausos);
    divResult.innerHTML =`
    <h1>Acerte o número secreto</h1>

    <h3>O número secreto está entre 
        <span id="menor-valor"> 0 </span> 
        e 
        <span id="maior-valor"> 100 </span>
    </h3>
    `;
})