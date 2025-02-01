let ListaAmigos = [];

// Adicionar nome na lista
function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    
    if (nome) {
        ListaAmigos.push(nome);
        atualizarLista();
        document.querySelector('input').value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, insira um nome.');
    }
}

// Sortear um amigo
function sortearAmigo() {
    if (ListaAmigos.length === 0) {
        alert('Por favor, adicione ao menos um amigo.');
    } else {
        let sorteado = ListaAmigos[Math.floor(Math.random() * ListaAmigos.length)];
        document.getElementById('resultado').innerText = `Nome sorteado: ${sorteado}`;

        // Remove o sorteado da lista
        ListaAmigos = ListaAmigos.filter(amigo => amigo !== sorteado);

        // Limpa a lista na tela e não mostra os nomes após o sorteio
        limparLista();
    }
}

// Atualiza a lista na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista

    ListaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        li.innerText = amigo;
        lista.appendChild(li);
    });
}

// Limpa a lista de amigos na tela
function limparLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Não exibe mais os nomes após o sorteio
}
