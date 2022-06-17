const listaDeTarefas = document.querySelector('#listaDeTarefas');

const caixaDeTexto = document.querySelector('#caixaDeTexto');

const botaoAdicionar = document.querySelector('#botaoAdicionar');

botaoAdicionar.addEventListener('click', function(){
    const textoDaTarefa = caixaDeTexto.value;
    caixaDeTexto.value = '';

    listaDeTarefas.appendChild(adicionarTarefas(textoDaTarefa));
    caixaDeTexto.focus();
})

function adicionarTarefas(textoDaTarefa){
    const elementoLi = document.createElement('li')
    const elementoSpan = document.createElement('span')

    elementoSpan.setAttribute('id','tarefa');
    elementoSpan.textContent = textoDaTarefa;

    elementoLi.appendChild (elementoSpan);
    elementoLi.appendChild (botaoRemover())

    return elementoLi
}

function botaoRemover (){
    const botaoTirar = document.createElement('button')
    botaoTirar.textContent = '☓'
    botaoTirar.className = 'remover'

    botaoTirar.addEventListener('click', function(){
        listaDeTarefas.removeChild(this.parentNode);
    })

    return botaoTirar
}