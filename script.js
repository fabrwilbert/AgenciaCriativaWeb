
const botoes = {
    home: document.getElementById("home"),
    sobre: document.getElementById("sobre"),
    servicos: document.getElementById("servicos"),
    depoimentos: document.getElementById("depoimentos"),
    contato: document.getElementById("contato"),
}

const cardSections = {
    home: document.getElementById("cardHome"),
    sobre: document.getElementById("cardSobre"),
    servicos: document.getElementById("cardServicos"),
    depoimentos: document.getElementById("cardDepoimentos"),
    contato: document.getElementById("cardContato"),
}

function mostrarCards(cardAtivo){
    for (const card in cardSections) {
        if (card === cardAtivo) {
            cardSections[card].classList.remove("inativo");
        } else {
            cardSections[card].classList.add("inativo")
        }
    }
}

botoes.home.addEventListener("click", (link) => {
    link.preventDefault();
    mostrarCards("home")
})

botoes.sobre.addEventListener("click", (link) => {
    link.preventDefault();
    mostrarCards("sobre");
})

botoes.servicos.addEventListener("click", (link) => {
    link.preventDefault();
    mostrarCards("servicos");
})

botoes.depoimentos.addEventListener("click", (link) => {
    link.preventDefault();
    mostrarCards("depoimentos");
})

botoes.contato.addEventListener("click", (link) => {
    link.preventDefault();
    mostrarCards("contato")
})

window.addEventListener("DOMContentLoaded", () => {
    mostrarCards("home");
})