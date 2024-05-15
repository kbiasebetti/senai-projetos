const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')
const User = require('./model/User')

const PORT = 3000
const hostname = 'localhost'

// ---CONFIG EXPRESS---
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// --------------------

app.get('/user/:dados', async (req, res) => {
    const dados = req.params
    console.log(dados)
    const pesq = await User.findOne
    res.status(200).json({message: `Dados recebidos!`})
})

app.get('/', (req, res) => {
    res.status(200).json({message: `Servidor rodando!`})
})

// --------------------
conn.sync().then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err) => {
    console.error(`Erro de conexão ${err}`)
})
// --------------------