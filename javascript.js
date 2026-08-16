const botoes = document.getElementsByClassName("botoes")
const menu = document.getElementById("seletor")

function botao1() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)
    
    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `1 x ${l} = ${1 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}

function botao2() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `2 x ${l} = ${2 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}

function botao3() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `3 x ${l} = ${3 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}

function botao4() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `4 x ${l} = ${4 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}

function botao5() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `5 x ${l} = ${5 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}
function botao6() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `6 x ${l} = ${6 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}
function botao7() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `7 x ${l} = ${7 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}
function botao8() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `8 x ${l} = ${8 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}
function botao9() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `9 x ${l} = ${9 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}
function botao10() {
    let tabuada = document.createElement('ul')

    let seta = document.createElement('p')
    seta.id = "voltar"
    seta.innerText = "Voltar"
    tabuada.prepend(seta)

    for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "none" 
    }

    for (let l = 1; l <= 10; l++) {
        let item = document.createElement('li')
        let botaoVoltar = document.createElement('p')

        item.innerText = `10 x ${l} = ${10 * l}`
        botaoVoltar.innerText = "Voltar"

        tabuada.appendChild(item)
    }

    menu.appendChild(tabuada)

    seta.onclick = function() {
        tabuada.remove()

        for (let i = 0; i < 10; i++) {
        botoes[i].style.display = "block" 

        seta.remove()
    }
    }
}