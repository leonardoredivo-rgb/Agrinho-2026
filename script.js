const botaoEnviar = document.getElementById('botao-enviar');
const campoNome = document.getElementById('nome');
const textoMensagem = document.getElementById('mensagem');

const telaHome = document.getElementById('tela-home');
const telaPergunta = document.getElementById('tela-pergunta');
const nomeJogador = document.getElementById('nome-jogador');

// Evento de clique para mudar de tela
botaoEnviar.addEventListener('click', function() {
    const nome = campoNome.value.trim();
    
    if (nome !== "") {
        // 1. Passa o nome digitado para a tela da pergunta
        nomeJogador.innerText = nome;
        
        // 2. Esconde a tela inicial e mostra a tela da pergunta
        telaHome.classList.add('escondido');
        telaPergunta.classList.remove('escondido');
    } else {
        alert("Por favor, digite seu nome primeiro!");
    }
});
