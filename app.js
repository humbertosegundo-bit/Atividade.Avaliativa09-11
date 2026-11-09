// ==========================================
// MÓDULO 1: Introdução ao DOM
// ==========================================
const tituloPrincipal = document.getElementById('titulo-principal');
const paragrafoBoasVindas = document.getElementById('paragrafo-boas-vindas');
const btnAlterarTexto = document.getElementById('btn-alterar-texto');

btnAlterarTexto.addEventListener('click', () => {
  tituloPrincipal.textContent = 'DOM Manipulado com Sucesso!';
  paragrafoBoasVindas.textContent = 'O conteúdo deste parágrafo foi alterado dinamicamente com JavaScript!';
});

// ==========================================
// MÓDULO 2: Eventos e Calculadora
// ==========================================
const inputValor1 = document.getElementById('valor1');
const inputValor2 = document.getElementById('valor2');
const btnSomar = document.getElementById('btn-somar');
const resultadoSoma = document.getElementById('resultado-soma');

btnSomar.addEventListener('click', () => {
  const num1 = parseFloat(inputValor1.value);
  const num2 = parseFloat(inputValor2.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultadoSoma.textContent = 'Inválido';
    return;
  }

  const soma = num1 + num2;
  resultadoSoma.textContent = soma;
});

// ==========================================
// MÓDULO 3: Criação e Remoção Dinâmica
// ==========================================
const btnCriarAviso = document.getElementById('btn-criar-aviso');
const containerAvisos = document.getElementById('container-avisos');
let contadorAvisos = 1;

btnCriarAviso.addEventListener('click', () => {
  // Criar o elemento div do aviso
  const novoAviso = document.createElement('div');
  novoAviso.classList.add('aviso-item');
  novoAviso.textContent = `Aviso #${contadorAvisos++}: Operação concluída! `;

  // Criar botão para remover o próprio aviso
  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Fechar';
  btnRemover.addEventListener('click', () => {
    novoAviso.remove();
  });

  novoAviso.appendChild(btnRemover);
  containerAvisos.appendChild(novoAviso);
});

// Seleção dos elementos do DOM
const btnToggleTema = document.getElementById('btn-toggle-tema');
const modulo4 = document.getElementById('modulo-4');

// Adiciona o escutador de evento de clique ao botão
btnToggleTema.addEventListener('click', () => {
  // Alterna a classe .dark-theme no elemento #modulo-4
  modulo4.classList.toggle('dark-theme');
});

// ==========================================
// MÓDULO 5: Validação de Formulário
// ==========================================
const inputNomeUsuario = document.getElementById('nome-usuario');
const erroNome = document.getElementById('erro-nome');

inputNomeUsuario.addEventListener('input', () => {
  if (inputNomeUsuario.value.trim().length < 5) {
    erroNome.style.display = 'block';
  } else {
    erroNome.style.display = 'none';
  }
});

// ==========================================
// MÓDULO 6: Delegação de Eventos
// ==========================================
const painelBotoes = document.getElementById('painel-botoes');
const logBotao = document.getElementById('log-botao');

painelBotoes.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-acao')) {
    logBotao.textContent = event.target.textContent;
  }
});

// ==========================================
// MÓDULO 7: Atributos e Dataset
// ==========================================
const caixaDestaque = document.getElementById('caixa-destaque');
const btnPrioridadeAlta = document.getElementById('btn-prioridade-alta');
const btnPrioridadeBaixa = document.getElementById('btn-prioridade-baixa');
const btnLimparAtributo = document.getElementById('btn-limpar-atributo');
const infoAtributo = document.getElementById('info-atributo');

function atualizarStatusAtributo() {
  const prioridade = caixaDestaque.dataset.prioridade;
  infoAtributo.textContent = prioridade ? prioridade : 'Nenhum';
}

btnPrioridadeAlta.addEventListener('click', () => {
  caixaDestaque.dataset.prioridade = 'alta';
  atualizarStatusAtributo();
});

btnPrioridadeBaixa.addEventListener('click', () => {
  caixaDestaque.dataset.prioridade = 'baixa';
  atualizarStatusAtributo();
});

btnLimparAtributo.addEventListener('click', () => {
  delete caixaDestaque.dataset.prioridade;
  atualizarStatusAtributo();
});

// ==========================================
// MÓDULO 8: Renderização Dinâmica (Lista de Tarefas)
// ==========================================
const formTarefa = document.getElementById('form-tarefa');
const inputTarefaTitulo = document.getElementById('input-tarefa-titulo');
const listaTarefas = document.getElementById('lista-tarefas');

const tarefas = [];

function renderizarTarefas() {
  listaTarefas.innerHTML = '';
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.textContent = tarefa;
    
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = '❌';
    btnExcluir.style.marginLeft = '10px';
    btnExcluir.addEventListener('click', () => {
      tarefas.splice(index, 1);
      renderizarTarefas();
    });

    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);
  });
}

formTarefa.addEventListener('submit', (event) => {
  event.preventDefault();
  const textoTarefa = inputTarefaTitulo.value.trim();
  
  if (textoTarefa !== '') {
    tarefas.push(textoTarefa);
    inputTarefaTitulo.value = '';
    renderizarTarefas();
  }
});

