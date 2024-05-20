let respostaGravar = document.getElementById('respostaGravar')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click', () => {
    const nome = document.getElementById('nome').value
    const idade = Number(document.getElementById('idade').value)

    const valores = {
        nome: nome,
        idade: idade
    }

    fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(valores)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        respostaGravar.innerHTML = `Usuário cadastro com sucesso!`
    })
    .catch((err) => {
        console.error(`Erro ao cadastrar usuário no banco de dados!, ${err}`)
    })
})