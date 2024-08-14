let res = document.getElementById('res')
let listar = document.getElementById('listar')

listar.addEventListener('click', () => {
    fetch(`http://localhost:3000/fabricantes`)
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = `ta no console`
        console.log(dados)
    })
    .catch((err) => {
        console.error(`Erro no servidor!, ${err}`)
    })
})