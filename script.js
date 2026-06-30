// Elementos da Página
const campoNome = document.getElementById('nome');
const textoMensagem = document.getElementById('mensagem');
const nomeJogador = document.getElementById('nome-jogador');
const telaHome = document.getElementById('tela-home');
const telaPergunta = document.getElementById('tela-pergunta');

// Botões
const btnEnviar = document.getElementById('btn-enviar');
const btnComecar = document.getElementById('btn-comecar');

// Variável para guardar o nome
let nomeSalvo = "";

//  registra o nome na tela inicial
btnEnviar.addEventListener('click', function() {
    nomeSalvo = campoNome.value.trim();
    
    if (nomeSalvo !== "") {
        textoMensagem.innerHTML = `Olá, <strong>${nomeSalvo}</strong>!<br>Clique no botão abaixo para começar o quiz.`;
    } else {
        alert("Por favor, digite seu nome!");
    }
});

// Muda para a página do Quiz
btnComecar.addEventListener('click', function() {
    if (nomeSalvo !== "") {
        // Passa o nome para a próxima tela
        nomeJogador.innerText = nomeSalvo;
        
        // Esconde uma tela e mostra a outra
        telaHome.classList.add('escondido');
        telaPergunta.classList.remove('escondido');
    } else {
        alert("Primeiro digite seu nome e clique em 'Enviar'!");
    }
});

// Seleciona os botões e a área do texto da pergunta
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');
const conteudoPergunta = document.getElementById('conteudo-pergunta');

// Define o tamanho inicial da fonte
let tamanhoFonte = 18;

// Função para aumentar a letra
btnAumentar.addEventListener('click', function() {
    if (tamanhoFonte < 30) { // Limite máximo para não quebrar o layout
        tamanhoFonte += 2;
        conteudoPergunta.style.fontSize = tamanhoFonte + 'px';
    }
});

// Função para diminuir a letra
btnDiminuir.addEventListener('click', function() {
    if (tamanhoFonte > 14) { // Limite mínimo para não ficar ilegível
        tamanhoFonte -= 2;
        conteudoPergunta.style.fontSize = tamanhoFonte + 'px';
    }
});