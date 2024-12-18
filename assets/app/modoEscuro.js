export function trocarCores(){
    const bg = document.querySelector('body')
    let listaElementos = [];
    
    for(var i = 0 ; i < bg.children.length ; i++){
        if(bg.children.item(i).classList != '' && bg.children.item(i).classList != 'mensagem'){
            listaElementos.push(bg.children.item(i).className);
        }
    }
    listaElementos.push('bg')
    listaElementos.forEach(element => {
        let conjuntoElemento = element.split(' ');
        let nomeElemento = conjuntoElemento[0]
        let elementoNode = document.querySelector(`.${conjuntoElemento[0]}`);

        if(elementoNode.classList.contains(`${nomeElemento}-dark`)){
            elementoNode.classList.replace(`${nomeElemento}-dark`, `${nomeElemento}-light`)
        }else{
            elementoNode.classList.replace(`${nomeElemento}-light`, `${nomeElemento}-dark`)
        }
    });
}