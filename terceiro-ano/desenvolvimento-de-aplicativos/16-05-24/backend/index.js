const express = require('express')
const cors = require('cors')
const conn = require('./db/conn')
const User = require('./model/User')
const app = express()

const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ADICIONAR
app.post('/user', async (req, res) => {
    const dados = req.body
    console.log(dados)
    try {
        await User.create({nome: dados.nome, idade: dados.idade})
        res.status(200).json(dados)
    } catch(err) {
        console.error('Erro ao gravar os dados!')
        res.status(500).json({message: 'Erro na gravação dos dados'})
    }
})

// CONSULTAR
app.get('/user/:nome', async (req, res) => {
    const dados = req.params
    console.log(dados)
    try {
        const pesquisa = await User.findOne({where: {nome: dados.nome}, raw: true})
        if (pesquisa === null) {
            res.status(200).json({message: `Usuário inexistente!`})
        }
        else if (pesquisa.nome == dados.nome) {
            res.status(200).json(pesquisa)
        }
        else {
            res.status(200).json({message: `Usuário inexistente!`})
        }
    }
    catch (err) {
        res.status(500).json({message: `Erro no servidor!`})
    }
})

app.get('/', (req, res) => {
    res.status(200).json({message: `Servidor rodando!`})
})

conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}:`)
    })
}).catch((err) => {
    console.error(`Erro de servidor!, ${err}`)
})