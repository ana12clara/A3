const carrosselInner = document.getElementById('carrosselInner');
const imagens = carrosselInner.querySelectorAll('img');
const setaEsquerda = document.getElementById('setaEsquerda');
const setaDireita = document.getElementById('setaDireita');

let indiceAtual = 0;

function atualizarCarrossel() {
    const deslocamento = -indiceAtual * 600;
    carrosselInner.style.transform = `translateX(${deslocamento}px)`;

    imagens.forEach(img => img.classList.remove('active'));
    if (imagens[indiceAtual]) {
        imagens[indiceAtual].classList.add('active');
    }
}

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarCarrossel();
}

function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarCarrossel();
}

// Eventos dos botões
setaDireita.addEventListener('click', proximaImagem);
setaEsquerda.addEventListener('click', imagemAnterior);

// Inicia com a primeira imagem ativa
atualizarCarrossel();

// Rolagem automática
