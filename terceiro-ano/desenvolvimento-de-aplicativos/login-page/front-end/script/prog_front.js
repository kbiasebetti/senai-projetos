let resposta = document.getElementById('resposta')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click', ()=>{
    const nome = document.getElementById('nome').value
    const idade = Number(document.getElementById('idade').value)
    
    const dados = {
        nome: nome,
        idade: idade
    }
    console.log(dados)

    fetch('http://localhost:3000/usuario',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        // console.log(dados)
        resposta.innerHTML = 'Nome = ' + dados.nome + '<br>'        
        resposta.innerHTML += 'Idade = ' + dados.idade
        resposta.style.fontFamily = 'Tahoma'
        resposta.style.fontWeight = 'bold'
        resposta.style.fontSize = '1.4rem'
        resposta.style.color = 'green'      

    })
    .catch((err)=>{
        console.error("erro de busca de dados",err)
    })
})