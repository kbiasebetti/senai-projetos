let resposta = document.getElementById('resposta')
let testar = document.getElementById('testar')
let consultar = document.getElementById('consultar')

testar.addEventListener('click', () => {
    fetch('http://localhost:3000/')
    .then(resp  => resp.json())
    .then(dados => {
        console.log(dados)
        resposta.innerHTML = dados.message
    })
    .catch(err => {
        console.error('O servidor não está rodando!')
    })
})

consultar.addEventListener('click', () => {
let nome = document.getElementById('nome').value
    fetch(`http://localhost:3000/user/${nome}`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        resposta.innerHTML = `Nome: ${dados.nome} <br> Idade: ${dados.idade}`
    })
    .catch((err) => {
        console.log(`Servidor não está rodando, ${err}`)
    })
})