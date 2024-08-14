let res = document.getElementById('res')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click', () => {
    const cnpj = document.getElementById('cnpj').value
    const marca = document.getElementById('marca').value

    const dados = {
        cnpj: cnpj,
        marca: marca
    }

    fetch('http://localhost:3000/fabricante', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = `CNPJ: ${dados.cnpj} <br> Marca: ${dados.marca}`
        console.log(dados)
    })
    .catch((err) => {
        console.error(`Erro no servidor!, ${err}`)
    })
})