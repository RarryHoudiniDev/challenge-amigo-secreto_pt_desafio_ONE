let amigos = [];

// Função para adicionar amigos ao array
function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    
    if (amigo !== "") {
        if (!amigos.includes(amigo)) {
            amigos.push(amigo);
            mostrarAmigos();
            limparCaixaTexto();
        } else {
            alert("Este nome já foi adicionado.");
        }
    } else {
        alert("Por favor, insira um nome.");
    }
}

// Função para listar os amigos na tela
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear **apenas um amigo**
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Para sortear, é necessário pelo menos dois amigos.");
        return;
    }

    let amigoSecreto = gerarAmigoSecreto();
    mostrarAmigoSecreto(amigoSecreto);
}

// Função para escolher **um amigo aleatório**
function gerarAmigoSecreto() {
    let indice = Math.floor(Math.random() * amigos.length);
    return amigos[indice];
}

// Função para exibir o resultado do sorteio
function mostrarAmigoSecreto(amigoSecreto) {
    let vista = document.getElementById("resultado");
    vista.innerHTML = `<h3>O amigo secreto sorteado é: <strong>${amigoSecreto}</strong></h3>`;
}

// Função para limpar o campo de texto
function limparCaixaTexto() {
    document.getElementById("amigo").value = "";
}
