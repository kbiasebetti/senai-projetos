let res = document.getElementById('res')
let atualizar = document.getElementById('atualizar')

atualizar.addEventListener('click', () => {
    const codFabricante = document.getElementById('codFabricante').value
    const cnpj = document.getElementById('cnpj').value
    const marca = document.getElementById('marca').value

    const dados = {
        codFabricante: codFabricante,
        cnpj: cnpj,
        marca: marca
    }

    fetch('http://localhost:3000/fabricante', {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = `Código: ${dados.codFabricante} <br> CNPJ: ${dados.cnpj} <br> Marca: ${dados.marca}`
        console.log(dados)
    })
    .catch((err) => {
        console.error(`Erro no servidor!, ${err}`)
    })
})