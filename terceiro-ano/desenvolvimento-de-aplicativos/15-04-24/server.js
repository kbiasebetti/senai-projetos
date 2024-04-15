const express = require('express')  
const app = express()

const hostname = 'localhost'
const PORT = 3000

// CONFIG EXPRESS
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('publish'))
// --------------------------------

// --------------------------------
app.get('/teste', (req, res) => {
    res.send('Teste de nova rota')
})

// --------------------------------
app.get('/', (req, res) => {
    res.end('Teste de rota ou ENDPOINT')
})
// --------------------------------



// --------------------------------
app.listen(PORT, hostname, () => {
    console.log(`Servidor rodando em ${hostname}:${PORT}`)
})
// --------------------------------