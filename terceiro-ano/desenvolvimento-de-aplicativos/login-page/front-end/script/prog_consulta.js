let res_consulta = document.getElementById('res_consulta')
let consultar = document.getElementById('consultar')

consultar.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    
    fetch(`http://localhost:3000/usuario?nome=${nome}`)
    .then(resposta => resposta.json())
    .then(dados => {
        res_consulta.innerHTML = 'Código: ' + dados.id + '<br>'
        res_consulta.innerHTML += 'Nome: ' + dados.nome + '<br>'
        res_consulta.innerHTML += 'Idade: ' + dados.idade
    })
    .catch((err)=>{
        console.error("erro de busca de dados",err)
    })
})