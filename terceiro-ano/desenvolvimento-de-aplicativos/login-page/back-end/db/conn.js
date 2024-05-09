const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('cadastro','root','senai',{
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize