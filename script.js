// EXERCÍCIO 1 - Alterando o conteúdo
const titulo = document.getElementById("titulo-boas-vindas");

titulo.textContent =
    "Bem-vindo ao Curso de Desenvolvimento de Sistemas!";


// EXERCÍCIO 2 - Criando e adicionando elementos
function adicionarItem(texto) {
    const lista = document.getElementById("lista-tarefas");
    const novoItem = document.createElement("li");

    novoItem.textContent = texto;
    lista.appendChild(novoItem);
}

document.getElementById("btn-adicionar").addEventListener("click", function () {
    const campo = document.getElementById("campo-tarefa");
    const texto = campo.value.trim();

    if (texto !== "") {
        adicionarItem(texto);
        campo.value = "";
    }
});


// EXERCÍCIO 3 - Alterando classes CSS
const painel = document.getElementById("painel");

painel.classList.remove("oculto");
painel.classList.add("destaque");


// EXERCÍCIO 4 - Removendo a primeira notificação
function removerPrimeiraNotificacao() {
    const lista = document.getElementById("notificacoes");
    const primeiraNotificacao = lista.firstElementChild;

    if (primeiraNotificacao !== null) {
        primeiraNotificacao.remove();
    }
}

document.getElementById("btn-remover").addEventListener("click", function () {
    removerPrimeiraNotificacao();
});


// EXERCÍCIO 5 - Manipulando evento de clique
document.getElementById("btn-exibir").addEventListener("click", function () {
    const campoNome = document.getElementById("campo-nome");
    const resposta = document.getElementById("resposta");
    const nome = campoNome.value.trim();

    if (nome !== "") {
        resposta.textContent = "Olá, " + nome + "! Seja bem-vindo(a)!";
    } else {
        resposta.textContent = "Por favor, digite seu nome.";
    }
});
