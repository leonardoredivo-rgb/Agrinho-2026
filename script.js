
const confirmar = document.getElementById('botao-enviar');
const botao = document.getElementById('botao-comecar');
botao.forEach(button =>{
   button.addEventListener('click', function(){
    const atual = document.querySelector('.ativo');
   })
})
const campoNome = document.getElementById('nome');
const textoMensagem = document.getElementById('mensagem');


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
