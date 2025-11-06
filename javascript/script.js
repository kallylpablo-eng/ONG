// Seleciona todos os botões "Inscrever"
const inscreverBotoes = document.querySelectorAll('button.inscrever');

// Função para atualizar vagas
function atualizarVagas(event) {
    event.preventDefault(); // Evita comportamento padrão

    // Encontra o <article> pai do botão
    const artigo = event.target.closest('article');
    if (!artigo) return;

    // Seleciona o parágrafo que contém as vagas
    const vagasP = artigo.querySelector('p.vagas');
    if (!vagasP) return;

    // Extrai o número de vagas
    const regex = /Disponíveis: (\d+)/;
    const match = vagasP.textContent.match(regex);

    if (match) {
        let vagas = parseInt(match[1], 10);

        if (vagas > 0) {
            vagas--; // decrementa
            vagasP.textContent = `Disponíveis: ${vagas}`;
            alert('Inscrição realizada com sucesso!');
        } else {
            alert('Desculpe, não há vagas disponíveis.');
        }
    }
}

// Adiciona evento de clique a todos os botões
inscreverBotoes.forEach(botao => {
    botao.addEventListener('click', atualizarVagas);
});
