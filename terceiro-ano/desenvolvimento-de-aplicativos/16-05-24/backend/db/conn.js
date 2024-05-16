const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('treinando-back', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log(`Conexão realizada com sucesso!`)
}).catch((err) => {
    console.error(`Erro ao se conectar com o banco de dados!`)
})

module.exports = sequelize