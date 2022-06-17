const listaDeTarefas = document.querySelector('#listaDeTarefas');

const caixaDeTexto = document.querySelector('#caixaDeTexto');

const botaoAdicionar = document.querySelector('#botaoAdicionar');

const listaSuspensa = document.querySelector('#listaSuspensa')


//Quando o botão adicionar for clicado 

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaDeTexto.value;
    caixaDeTexto.value = '';

    listaDeTarefas.appendChild(adicionarTarefas(textoDaTarefa));
    mostrarOcultarLista();
    caixaDeTexto.focus();
})

function adicionarTarefas(textoDaTarefa){
    const elementoLi = document.createElement('li')
    const elementoSpan = document.createElement('span')

    elementoSpan.setAttribute('id','tarefa');
    elementoSpan.textContent = textoDaTarefa;
    
    elementoLi.className = 'naoRealizada'
    elementoLi.appendChild (elementoSpan);
    elementoLi.appendChild (botaoRemover())

    //Quando uma elemento for clicado pelo mouse altera o texto

    elementoSpan.addEventListener('click', function(){
        if (this.id === 'tarefa'){
            if(this.parentNode.className==='naoRealizada'){
                this.parentNode.className = 'realizada'
            } else {
                this.parentNode.className = 'naoRealizada'
            }
        }
    })

    return elementoLi
}

function botaoRemover (){
    const botaoTirar = document.createElement('button')
    botaoTirar.textContent = '☓'
    botaoTirar.className = 'remover'

    //Quando o botão remover for clicado

    botaoTirar.addEventListener('click', function(){
        listaDeTarefas.removeChild(this.parentNode);
    })

    return botaoTirar
}

function mostrarOcultarLista(){
    const elementoSpan = document.querySelector('tarefa');
    if(elementoSpan===null){
        listaSuspensa.setAttribute('hidden', 'hidden')
    }else{
        listaSuspensa.removeAttribute('hidden')
    }
}