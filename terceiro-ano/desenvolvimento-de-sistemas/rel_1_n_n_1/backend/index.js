const express = require('express')
const app = express()
const cors = require('cors')
const Entrega = require('./model/Entrega')
const Fabricante = require('./model/Fabricante')
const Produto = require('./model/Produto')
const conn = require('./db/conn')
const controllerFabricante = require('./controller/controllerFabricante')

const PORT = 3000
const hostname = 'localhost'
// ---------------------------------------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// ---------------------------------------------

app.post('/fabricante', controllerFabricante.cadastrarFabricante)
app.get('/fabricantes', controllerFabricante.listarFabricante)
app.get('/fabricante', controllerFabricante.consultarFabricante)
app.delete('/fabricante/:id', controllerFabricante.apagarFabricante)
app.put('/fabricante', controllerFabricante.atualizarFabricante)

app.get('/', (req,res) => {
    res.status(200).json({ message: 'Aplicação Rodando!'})
})
// ---------------------------------------------
conn.sync().then(() => {
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err) => {
    console.error('Não foi possível conectar com o banco de dados!',err)
})