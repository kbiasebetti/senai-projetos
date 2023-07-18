let res1 = document.querySelector('#res1')
let res2 = document.querySelector('#res2')
let res3 = document.querySelector('#res3')

let nome_array = []
let idade_array = []
let altura_array = []

function inserir(){
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    let altura = document.getElementById('altura').value

    nome_array.push(nome)
    idade_array.push(idade)
    altura_array.push(altura)

    res1.innerHTML += 'Nome:' + ' ' + nome + ' ' 
    res2.innerHTML += 'Idade:' + ' ' + idade + ' '
    res3.innerHTML += 'Altura:' + ' ' + altura + ' '
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