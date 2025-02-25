//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido."); // Valida a entrada
        return;
    }

    amigos.push(nome); // Adiciona ao array
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a exibição da lista
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de recriar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome sorteado

    // Atualiza o resultado da sorteio
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores
    let liResultado = document.createElement("li");
    liResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(liResultado); // Exibe o resultado
}