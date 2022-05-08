/*  Criando uma Função que retorna as horas formatadas no modelo '00:00:00'  */
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


const relogio = document.querySelector('.relogio');         // Capturando a class relógio.
const iniciar = document.querySelector('.iniciar');         // Capturando a class iniciar.
const pausar = document.querySelector('.pausar');           // Capturando a class pausar.
const zerar = document.querySelector('.zerar');             // Capturando a class zerar.

let segundos = 0;   // Essa variável será incrementada de um em um após o início da função iniciaRelogio()
let tempo;

/*   Criando uma função que incremente a variável segundos de um em um e escreve no HTML da classe relógio a função criaHoraDosSegundos   */
function iniciaRelogio() {
    tempo = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}


iniciar.addEventListener('click', function (evento) {
    clearInterval(tempo);
    relogio.classList.remove('pausado');
    iniciaRelogio();
});


pausar.addEventListener('click', function (evento) {
    clearInterval(tempo);
    relogio.classList.add('pausado');
});


zerar.addEventListener('click', function (evento) {
    relogio.classList.remove('pausado');    
    clearInterval(tempo);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});