const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('serversenai', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mssql'
})

sequelize.authenticate().then(() => {
    console.log('Conexão realiza com sucesso!')
}).catch((err) => {
    console.error(`Erro de conexão ${err}`)
})

module.exports = sequelize