// SELECIONANDO ELEMENTO 
const value = document.getElementById("value")
const reset = document.querySelector(".reset")

// SELECIONANDO TODOS OS BOTÕES
const buttons = document.querySelectorAll(".btn")

// VARIÁVEL PARA O CONTADOR
let count = 0

// ADICIONANDO EVENTO PARA TODOS OS BOTÕES
buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        const btn = e.currentTarget.classList

        if(btn.contains("increase")) {
            count ++
        }
        else if(btn.contains("decrease")) {
            count --
        }
        else {
            count = 0
        }
        colorsValue()
        value.textContent = count
    })
})

// FUNÇÃO PARA GERAR CORES
const colorsValue = () => {
    if(count > 0) {
        value.style.color = "green"
    }
    else if(count < 0) {
        value.style.color = "red"
    }
    else {
        value.style.color = "#222"
    }
}