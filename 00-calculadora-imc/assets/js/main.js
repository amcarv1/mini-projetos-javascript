/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  Capturando o Evento de Submit do Formulário HTML. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

const form = document.querySelector('#formulario');     // Formulário capturado e atribuído a varíavel form.

/* -=-=-=-=-=-=-=-= Parando o Evento de Submit para Captura dos Dados de Entrada e Exibição dos Resultados. -=-=-=-=-=-=-=-= */

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    /* -=-=-=-= Pegando os Valores dos Inputs do Formulário. -=-=-=-= */

    // Pegando os Inputs do HTML.
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');

    // Pegando os Valores dos Inputs do HTML.
    const valorInputPeso = Number(inputPeso.value);
    const valorInputAltura = Number(inputAltura.value);


    /* -=-=-=-= Calculando o Valor do IMC. -=-=-=-= */
    const imc = calculaIMC(valorInputPeso, valorInputAltura);


    /* -=-=-=-= Exibindo o Resultado do Cálculo do IMC. -=-=-=-=*/

    // Exibindo um Resultado Alternativo Caso os Valores dos Inputs não Sejam Números.
    if ((!valorInputPeso) && (!valorInputAltura)) return exibeResultado('Peso e Altura Inválidos!', false)
    if (!valorInputPeso) return exibeResultado('Peso Inválido!', false);
    if (!valorInputAltura) return exibeResultado('Altura Inválida!', false);

    // Exibindo o Resultado Caso os Valores dos Inputs Sejam Números.
    exibeResultado(`Seu IMC vale ${imc}. Você está ${nivelIMC(imc)}`, true);


});


/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Seção das Funções. -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */

// 1. Criando uma Função Especializada no Cálculo do IMC.

function calculaIMC(peso, altura) {
    const imc = (peso / (altura ** 2));
    return imc.toFixed(2);
}


// 2. Criando uma Função Especializada no Retorno de uma Mensagem Personalizada de Acordo com o IMC passado no Parâmetro.

function nivelIMC(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau I', 'Obesidade Grau II', 'Obesidade Mórbida']

    if (imc >= 39.9) return `com ${nivel[5]}`
    if (imc >= 34.9) return `com ${nivel[4]}`
    if (imc >= 29.9) return `com ${nivel[3]}`
    if (imc >= 24.9) return `com ${nivel[2]}`
    if (imc >= 18.5) return `com o ${nivel[1]}`
    if (imc < 18.5)  return `Você está ${nivel[0]}`

}


// 3. Criando uma Função Especializada na Criação de Parágrafos.

function criaParagrafo() {
    const paragrafo = document.createElement('p');  // Criando uma tag <p> na memória e atribuindo a variável paragrafo.
    return paragrafo; // Retornando o valor parágrafo.
}


// 4. Criando uma Função Especializada na Exibição do Resultado dos cálculos na Tela.

function exibeResultado(mensagem, valido) {

    const resultado = document.querySelector('#resultado');     // id resultado capturado.

    resultado.innerHTML = '';   // Apagando o que estava escrito no HTML.

    const paragrafo = criaParagrafo(); // Criando o parágrafo a ser exibido.

    if (valido) {
        paragrafo.classList.add('paragrafo-resultado')
    }   else {
        paragrafo.classList.add('bad');
    }
    
    paragrafo.innerHTML = mensagem; // Escrevendo no HTML a mensagem passada no parâmetro.

    resultado.appendChild(paragrafo); // Atribuindo a variável paragrafo ao corpo do HTML.

}
