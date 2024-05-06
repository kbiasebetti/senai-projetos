const express = require('express')
const app = express()
const connection = require('./database/connection.js')
const Usuario = require('./model/cadastro.js')
const cors = require('cors')

const hostname = 'localHost'
const PORT = '3000'


// express cfg ------------------------------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
// ------------------------------------------------

// Rotas ------------------------------------------
app.get('./usuario', async (req, res) => {
    const dados = req.query
    try {
        const pesquisa = await Usuario.findAll({raw:true, where: {nome:dados.nome}})
        console.log(pesquisa)
        res.status(200).json(pesquisa)
    } catch(err) {
        console.error('Erro ao gravar os dados!')
        res.status(500).json({message: 'Erro na gravação dos dados'})
    }
})

app.post('usuario', async (req, res) => {
    const dados = req.body
    console.log(dados)
    try {
        await Usuario.create({raw:true})
        res.status(200).json(dados)
    } catch(err) {
        console.error('Erro ao gravar os dados!')
        res.status(500).json({message: 'Erro na gravação dos dados'})
    }
})


app.get('', (req,res) => {
    res.end('Servidor comunicando corretamente.')
    console.log('- Rota principal requisitada')
})


app.post('/cadastrar', async (req,res) => {
    const dados = req.body
    console.log(dados)
    try{
        await Usuario.create({nome: req.body.nome, idade: req.body.idade})
        console.log(`- Dados inseridos com sucesso: \n Nome: ${req.body.nome} \n Idade ${req.body.idade}`)
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro' + err)
    }
})


app.delete('/deletar', async (req,res) => {
    try{

    }catch(err){

    }
})

// ------------------------------------------------
connection.sync().then(() =>{
    app.listen(PORT, hostname,() => {
        console.log(`- Programa sendo executado no endereço ${hostname}:${PORT}`)
    })
}).catch((err) => {
    console.error(`--- Erro ao authenticar serviço, erro ${err}`)
})