const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('cadastro', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.sync().then(() => {
//     console.log('- Conexão realizada com sucesso')
// }).catch((err) => {
//     console.error(`--- Erro na conexão com banco de dados, erro ${err}`)
// })

module.exports = sequelize