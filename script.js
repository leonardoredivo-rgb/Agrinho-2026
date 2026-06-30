// 1. Pegando os elementos certos do seu HTML atual
const botaoEnviar = document.querySelector('button[type="button"]:nth-of-type(1)'); // Pega o primeiro botão ("Enviar")
const campoNome = document.querySelector('input[type="text"]');
const textoMensagem = document.querySelector('p:nth-of-type(2)'); // Onde está o "Olá!"

const telaHome = document.querySelector('div'); // div principal
const telaPergunta = document.getElementById('tela-pergunta');
const nomeJogador = document.getElementById('nome-jogador');

// 2. O evento de clique no botão Enviar
botaoEnviar.addEventListener('click', function() {
    const nome = campoNome.value.trim();
    
    if (nome !== "") {
        // Mostra o nome na pergunta
        if (nomeJogador) nomeJogador.innerText = nome;
        
        // Esconde a página inicial e mostra a pergunta
        telaHome.style.display = 'none';
        telaPergunta.style.display = 'block';
    } else {
        alert("Por favor, digite seu nome primeiro!");
    }
});
