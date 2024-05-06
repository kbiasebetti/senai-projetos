let resposta = document.getElementById('res')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click', async () => {
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    

    await fetch(`http://127.0.0.1:3000/cadastrar`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({nome, idade})
    })
    .then(resposta => resposta.json())
    .then(dados => {
        resposta.innerHTML += 'Nome = ' + dados.nome + '</br>'
        resposta.innerHTML += 'Idade = ' + dados.idade
    })
    .catch((err) =>{
        console.error(`-- Erro de busca de dados, erro ${err}`)
    })
})