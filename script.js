
const botao = document.getElementById('botao-enviar');
const campoNome = document.getElementById('nome');
const textoMensagem = document.getElementById('mensagem');

const telaHome = document.getElementById('tela-home');
const telaPergunta = document.getElementById('tela-pergunta');
const nomeJogador = document.getElementById('nome-jogador');

botao.addEventListener('click', function(evento) {
    evento.preventDefault();
    
    const nome = campoNome.value.trim();
    
    if (nome !== "") {
        // Atualiza o texto da tela com o nome digitado!
        textoMensagem.innerHTML = `Olá, <strong>${nome}</strong>!<br>Clique abaixo para começar o quiz.`;
    } else {
        alert("Por favor, digite seu nome primeiro!");
    }
});
