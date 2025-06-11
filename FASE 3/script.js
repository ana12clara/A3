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
setInterval(proximaImagem, 4000);//4 segundos


function moveUp(button) {
    const ucItem = button.parentElement;
    const prev = ucItem.previousElementSibling;
    // prev pode ser null ou o botão Adicionar UC, ignoramos se for botão
    if (prev && prev.classList.contains('uc-item')) {
        ucItem.parentElement.insertBefore(ucItem, prev);
    }
}

function moveDown(button) {
    const ucItem = button.parentElement;
    const next = ucItem.nextElementSibling;
    // next pode ser null ou o botão Adicionar UC, ignoramos se for botão
    if (next && next.classList.contains('uc-item')) {
        ucItem.parentElement.insertBefore(next, ucItem);
    }
}

function btnAdicionarUC() {
    const novaUC = prompt('Digite o nome da nova UC:');
    if (novaUC && novaUC.trim() !== '') {
        const listaUCs = document.getElementById('listaUCs');

        const novoDiv = document.createElement('div');
        novoDiv.classList.add('uc-item');
        novoDiv.innerHTML = `${novaUC.trim()} 
      <button class="up" onclick="moveUp(this)">&#8593;</button> 
      <button class="down" onclick="moveDown(this)">&#8595;</button>`;

        // Insere no final da listaUCs, sem referência a botão
        listaUCs.appendChild(novoDiv);
    }
}


document.getElementById('btnAddDescricao').addEventListener('click', function () {
  const textarea = document.getElementById('novaDescricao');
  const textoNovo = textarea.value.trim();

  if (textoNovo === '') {
    alert('Por favor, digite alguma informação antes de adicionar.');
    return;
  }

  const sobreMimTd = document.getElementById('sobreMim');

  // Criar um novo parágrafo com o texto inserido
  const p = document.createElement('p');
  p.textContent = textoNovo;
  p.style.marginTop = '10px';

  // Adiciona o parágrafo antes do textarea e botão, para ficar abaixo do texto original
  sobreMimTd.insertBefore(p, textarea.parentElement);

  // Limpar textarea
  textarea.value = '';
});

