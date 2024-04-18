const express = require('express') // Solicita o framework do Express 
const app = express()
const conn = require('./db/conn')
const User = require('./Model/Users')

const hostname = 'localhost' // ip 127.0.0.1
const PORT = 3000


// ------------config express-----------------------
app.use(express.urlencoded({extended:true})) // uso do middleware para url
app.use(express.json()) // mensagens no corpo do HTTP JSON
app.use(express.static('public')) // pasta dos arquivos estáticos -> front end

app.get('/user', async (req, res) => {
    try {
        const pesq = await User.findAll({raw: true})
        console.log(pesq)
        res.status(200).json(pesq)
    }catch(err) {
        console.error(`Erro de consulta! ${err}`)
        res.status(500).json({message: `Dados não encontrados!`})
    }
})

app.get('/', (req, res) => {
    res.status(200).json({message: "Mensagem enviada com sucesso!"})
})
// -------------------------------------------------

conn.sync().then(() => {
    app.listen(PORT, hostname, ()=> {
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err => {
    console.error(`Não foi possível conectar com o banco de dados! ${err}`)
}))

