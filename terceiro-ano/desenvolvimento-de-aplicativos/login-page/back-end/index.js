const express = require('express')
const cors = require('cors')
const app = express()
const conn = require('./db/conn')
const Usuario = require('./model/Usuario')
const { where } = require('sequelize')

const PORT = 3000
const hostname = 'localhost'

/* Config EXPRESS*/
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
app.use(cors())


// Método para atualizar os dados do usuário pelo parâmetro 'nome'
app.put('/usuario', async (req, res) => {
    const valor = req.body
    
    try {
        const pesq = await Usuario.findOne({raw: true, where: {nome: valor.nome}})
        if(pesq === null) {
            res.status(200).json({message: 'Usuário inexistente no banco de dados!'})
        }
        else if(pesq.nome == valor.nome) {
            const atual = await Usuario.update(valor, {where: {nome: pesq.nome}})
            res.status(200).json({message: 'Dados do usuário atualizados no banco de dados!'})
        }
        else {
            res.status(404).json({message: 'Nome do usuário incorreto!'})
        }
    } 
    catch(err) {
        console.error(err)
        res.status(500).json({message: 'Erro ao atualizar os dados'})
    }
})

// Método para apagar o usuario pelo parâmetro 'nome'
app.delete('/usuario/:valor', async (req, res) => {
    const valor = req.params.valor
    console.log(valor)
    res.status(200).json({message: 'conversou com o frotend'})
    // try {
    //     const pesq = await Usuario.findOne({raw:true, where: {nome: valor}})
    //     console.log(pesq)
    //     if(pesq === null){
    //         res.status(200).json({message: 'Usuário inexistente no banco de dados!'})
    //     }else if(pesq.nome == valor){
    //         const apagar = await Usuario.destroy({where: {nome: pesq.nome}})
    //         res.status(200).json({message: 'Dados do usuário excluídos!'})
    //     }
    // } catch(err) {
    //     console.error('Erro ao pesquisar dados!')
    //     res.status(500).json({message: 'Erros ao apagar dados!'})
    // }
})

// Método para consultar os dados do usuário pelo 'query'
app.get('/usuario', async (req,res)=>{
    const dados = req.query
    try{
        const pesq = await Usuario.findOne({raw: true, where: {nome: dados.nome}})
        console.log(pesq)
        res.status(200).json(pesq)

    }catch(err){
        console.error('Erro ao gravar os dados!')
        res.status(500).json({message: 'Erros na gravação dos dados!'})
    }   
})

// Método para cadastrar um novo usuário
app.post('/usuario', async (req,res)=>{
    const dados = req.body

    try{
        await Usuario.create(dados, {raw: true})
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao gravar os dados!')
        res.status(500).json({message: 'Erros na gravação dos dados!'})
    }
})

// Método para criar uma rota no servidor para lidar com requisições de HTTP 
app.get('/', (req,res)=>{
    res.end('Servidor ativo!')
})


// Método para iniciar um servidor web após garantir que a conexão com o banco de dados está estabelecida e sincronizada
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err)=>{
    console.error('Erro de conexão com o banco de dados!',err)
})


// Código para deletar um usuário a partir do ID dele no banco de dados
// --este código não foi utilizado no programa, está aqui apenas para armazena-lo--
// app.delete('/usuario/:valor', async (req, res) => {
//     const valor = req.params.valor
//     console.log(valor)

//     const pesq = await Usuario.findByPk(valor, {raw:true})
//     console.log(pesq)

//     try {
//         if(pesq === null){
//             res.status(200).json({message: 'Usuário inexistente no banco de dados!'})
//         }else if(pesq.id == valor){
//             const apagar = await Usuario.destroy({where: {id: pesq.id}, raw:true})
//             res.status(200).json({message: 'Dados do usuário excluídos!'})
//         }
//     } catch(err) {
//         console.error('Erro ao pesquisar dados!')
//         res.status(500).json({message: 'Erros ao apagar dados!'})
//     }
// })
