console.log('mostrar o document', document);

console.log(document.querySelector(".botao-trailer"));

//passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando js
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


//passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botao veja o trailer");
    //passo 4 - abrir a modal na tela
modal.classList.add("aberto");
video.setAttribute("src", linkDoVideo);
});

//passo 3 - dar um jeito de pegar o elemento da modal no js

//objetivo 2/ passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");
console.log(botaoFecharModal);
//passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => { 
    console.log(botaoFecharModal);
    //passo 3 - fechar a modal
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

const viideo = document.getElementById("video");


