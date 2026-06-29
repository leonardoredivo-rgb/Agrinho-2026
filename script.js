
var botao = document.getElementById('botao-enviar');
var campoNome = document.getElementById('nome');
var textoMensagem = document.getElementById('mensagem');

botao.addEventListener('click', function(evento) {
    evento.preventDefault(); // Impede a página de subir quando clica no '#'
    
    const nome = campoNome.value.trim();
    
    if (nome !== "") {
        // Atualiza o texto da tela com o nome digitado!
        textoMensagem.innerHTML = `Olá, <strong>${nome}</strong>!<br>Clique abaixo para começar o quiz.`;
    } else {
        alert("Por favor, digite seu nome primeiro!");
    }
});
