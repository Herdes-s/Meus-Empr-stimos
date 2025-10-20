const nomeInput = document.getElementById("nome")
const itemInput = document.getElementById("item")
const botaoEnviar = document.getElementById("botao")
const resultado = document.getElementById("list-emprestados")

    botaoEnviar.addEventListener('click', () => {
        const nome = nomeInput.value;
        const item = itemInput.value;
        
        if (nomeInput.value === "" && itemInput.value === "") {
         alert("Erro!");
         return;
        }
    const div = document.createElement('div');

    div.classList.add('emprestado');

    div.innerHTML = `
    <p class="new-item">${item}</p> 
    <p class="new-nome">Emprestado para: ${nome}.</p> 
    <button class="devolvido" >Devolvido</button></div>
    `;
    
    div.querySelector('.devolvido').addEventListener('click', () => {
        div.remove();
    });
    
    resultado.appendChild(div);
    
    nomeInput.value = "";
    itemInput.value = "";
});