// Aguarda o HTML carregar
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mostrar o botão verde "Começar" apenas quando digitar o nome
    const inputName = document.getElementById("username-input");
    const startButtonArea = document.getElementById("start-button-area");
    const startQuizBtn = document.getElementById("start-quiz-btn");
    const quizSection = document.getElementById("quiz-section");
    const greetingText = document.getElementById("greeting-text");
    
    let nomeUsuario = "";

    inputName.addEventListener("input", () => {
        nomeUsuario = inputName.value.trim();
        if (nomeUsuario.length > 2) {
            startButtonArea.classList.remove("hidden"); // Mostra o botão verde
        } else {
            startButtonArea.classList.add("hidden");
        }
    });

    // Ao clicar em Começar, esconde o formulário e mostra o quiz
    startQuizBtn.addEventListener("click", () => {
        greetingText.textContent = `Olá, ${nomeUsuario}! Responda ao Quiz abaixo:`;
        document.getElementById("name-form").classList.add("hidden");
        startButtonArea.classList.add("hidden");
        quizSection.classList.remove("hidden"); // Revela o quiz
    });

    // 2. Sistema do Quiz de 3 Perguntas
    const scoreCounter = document.getElementById("score-counter");
    let pontos = 0;

    // Função genérica para validar as respostas das perguntas
    const configurarPergunta = (classeBotao) => {
        const botoes = document.querySelectorAll(classeBotao);
        botoes.forEach(botao => {
            botao.addEventListener("click", (e) => {
                const acertou = e.target.getAttribute("data-correct") === "true";
                
                if (acertou) {
                    pontos += 10;
                    scoreCounter.textContent = pontos;
                    e.target.style.backgroundColor = "#2a7a43"; // Verde se acertou
                    e.target.style.color = "white";
                } else {
                    e.target.style.backgroundColor = "#d9534f"; // Vermelho se errou
                    e.target.style.color = "white";
                }
                
                // Desabilita os botões daquela pergunta após responder
                botoes.forEach(b => b.setAttribute("disabled", "true"));
            });
        });
    };

    // Ativa a lógica para as 3 perguntas
    configurarPergunta(".q1");
    configurarPergunta(".q2");
    configurarPergunta(".q3");

    // 3. Controle de Acessibilidade (Tamanho da Fonte)
    const btnIncrease = document.getElementById("font-increase-btn");
    const btnDecrease = document.getElementById("font-decrease-btn");
    let tamanhoFonte = 12;

    btnIncrease.addEventListener("click", () => {
        if (tamanhoFonte < 18) { tamanhoFonte += 1; document.body.style.fontSize = tamanhoFonte + "pt"; }
    });
    btnDecrease.addEventListener("click", () => {
        if (tamanhoFonte > 10) { tamanhoFonte -= 1; document.body.style.fontSize = tamanhoFonte + "pt"; }
    });

    // 4. Controle do Tema Escuro
    const toggleThemeBtn = document.getElementById("toggle-theme-btn");
    toggleThemeBtn.addEventListener("click", () => {
        const temaAtual = document.documentElement.getAttribute("data-theme");
        if (temaAtual === "dark") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
        }
    });
});
