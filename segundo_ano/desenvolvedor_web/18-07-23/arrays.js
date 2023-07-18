let res = document.querySelector('#res')
let dados = []

function inserir(){
    let cidade = document.getElementById('cidade').value
    dados.push(cidade)
    console.log(dados)
    res.innerHTML = dados
}

function inserir_ini(){
    let cidade = document.getElementById('cidade').value
    dados.unshift(cidade)
    console.log(dados)
    res.innerHTML = dados
}

function apagar(){
    dados.pop()
    console.log(dados)
    res.innerHTML = dados
}

function apagar_ini(){
    dados.shift()
    console.log(dados)
    res.innerHTML = dados
}