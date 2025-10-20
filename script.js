const nomeInput = document.getElementById("nome")
const itemInput = document.getElementById("item")
const botaoEnviar = document.getElementById("botao")
const resultado = document.getElementById("list-emprestados")

botaoEnviar.addEventListener('click', () => {
    const nome = nomeInput.value;
    const item = itemInput.value;

    resultado.innerHTML += `
    <p id="new-item">${item}</p> 
    <p id="new-nome">Emprestado para: ${nome}.</p> 
    <button id="devolvido">Devolvido</button>`;
})
