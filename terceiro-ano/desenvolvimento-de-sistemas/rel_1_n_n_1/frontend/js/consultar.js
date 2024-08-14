let res = document.getElementById('res')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', () => {
    const marca = document.getElementById('marca').value

    fetch(`http://localhost:3000/fabricante?marca=${marca}`)
    .then(resposta => resposta.json())
    .then(dados => {
        res.innerHTML = `Código: ${dados.codFabricante} <br> Marca: ${dados.marca} <br> CNPJ: ${dados.cnpj}`
        console.log(marca)
    })
    .catch((err) => {
        console.error(`Erro no servidor!, ${err}`)
    })
})