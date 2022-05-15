const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas'); 


/* Seção dos Eventos */

// Primeiro Evento 
btnTarefa.addEventListener('click', function(evento) {
    if (!inputNovaTarefa.value) return;

    criaTarefa(`${inputNovaTarefa.value}`);
});


// Segundo Evento 
inputNovaTarefa.addEventListener('keypress', function(evento) {
    if (evento.key === 'Enter') {
        if (!inputNovaTarefa.value) return;
        criaTarefa(`${inputNovaTarefa.value}`);
    }    
});


// Terceiro Evento 
document.addEventListener('click', function(evento) {
    const elemento = evento.target;

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }  
}); 

/* Fim da Seção dos Eventos. */

/* Seção das Funções */

// Primeira Função.
function criaTarefa(tarefa) {
    const li = criaTagLi();
    li.innerHTML = tarefa;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

// Segunda Função.
function criaTagLi() {
    const li = document.createElement('li');
    return li;
}

// Terceira Função
function limpaInput() {
    inputNovaTarefa.value = ''
    inputNovaTarefa.focus();
}

// Quarta Função
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar essa tarefa';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

// Quinta Função
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')

    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar essa tarefa', '');
        listaTarefas.push(tarefaTexto);
    }

    /* Simulando um Banco de Dados. */
    /* Criaremos uma arquivo JSON. */
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// Sexta Função
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
  
    for(let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
    }
}

/* Fim da Seção das Funções */

adicionaTarefasSalvas(); // Chamando a função.
