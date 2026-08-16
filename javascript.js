const botoes = document.getElementsByClassName("botoes")
const menu = document.getElementById("seletor")

let interruptor = true

function botao1() {
    
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `1 x ${l} = ${1 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }
    let seta = document.createElement('img')
    seta.src = "seta.png"
    seta.id = "voltar"
    tabuada.prepend(seta)

    menu.appendChild(tabuada)
}

seta.onclick = function() {
    tabuada.remove()

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block"
    }

    interruptor = false
}

function botao2() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `2 x ${l} = ${2 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}

function botao3() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `3 x ${l} = ${3 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}
function botao4() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `4 x ${l} = ${4 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}
function botao5() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `5 x ${l} = ${5 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}
function botao6() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `6 x ${l} = ${6 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}
function botao7() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `7 x ${l} = ${7 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}
function botao8() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `8 x ${l} = ${8 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}
function botao9() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `9 x ${l} = ${9 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}
function botao10() {
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    let tabuada = document.createElement('ul')

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `10 x ${l} = ${10 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)
}