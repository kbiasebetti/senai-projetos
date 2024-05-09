let res_apagar = document.getElementById('res_apagar')
let apagar = document.getElementById('apagar')

apagar.addEventListener('click', () => {
    const nome = document.getElementById('nome').value

    fetch(`localhost:3000/usuario/${nome}`, {
        method: 'delete',
        headers: { 'Content-Type':'application/json' },
    })
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch((err) => {
        console.error(`Erro ao apagar os dados, ${err}`)
    })
})