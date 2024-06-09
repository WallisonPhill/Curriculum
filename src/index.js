/*
  OBJ 1 - quando clicarmos na seta de avançar, temos que mostrar o próximo cartão da lista.
    - passo 1: dar um jeito de pegar o elemento html da seta avançar
    - passo 2: dar um jeito de identificar o clique do usuario na seta avançar
    - passo 3: fazer aparecer o próximo cartao da lista
    - passo 4: buscar o cartao que está selecionado a esconder

    OBJ 2 - quando clicarmos na seta de voltar, temos que mostrar o cartao anterior da lista
    - passo 1: dar um jeito de pegar o elemento html da seta voltar
    - passo 2: dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3: fazer aparecer o cartao anterior da lista
    - passo 4: buscar o cartao que está selecionado e esconder
*/
/*
  OBJ 1 - quando clicarmos na seta de avançar, temos que mostrar o próximo cartão da lista.
    - passo 1: dar um jeito de pegar o elemento html da seta avançar*/
const btnAvancar = document.getElementById("btn-avancar");/*Aqui estou dizendo para buscar dentro do documento quem tem a id: btn-avancar*/

const btnVoltar = document.getElementById("btn-voltar"); //- passo 1: dar um jeito de pegar o elemento html da seta voltar

let cartaoAtual = 0; //Aqui estou criando uma variável para incrementar toda vez que for add um novo cartao
const cartoes = document.querySelectorAll(".cartao");

/*  - passo 2: dar um jeito de identificar o clique do usuario na seta avançar*/
btnAvancar.addEventListener("click", function () {
  const ultimoCartao = cartaoAtual === cartoes.length - 1;
  if (ultimoCartao) return; //Se chegou ao fim da lista, pare a execução 

  //   - passo 4: buscar o cartao que está selecionado e esconder
  esconderCartaoSelecionado();
  
  //  - passo 3: fazer aparecer o próximo cartao da lista, colocando a classe selecionado nele
  cartaoAtual++;
  mostrarCartao();

});

btnVoltar.addEventListener("click", function () {
  const primeiroCartao = cartaoAtual === 0;
  if (primeiroCartao) return;
  
  esconderCartaoSelecionado();

  cartaoAtual--;  //- passo 3: fazer aparecer o cartao anterior da lista
  mostrarCartao();

});

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

