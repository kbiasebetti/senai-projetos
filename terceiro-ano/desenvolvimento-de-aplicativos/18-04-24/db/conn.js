const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('servidorsenai', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  // sequelize.authenticate().then(() => {
  //   console.log('Conexão realizada com sucesso!')
  // }).catch((err) => {
  //   console.error('Não foi possível se conectar com o banco de dados!')
  // })     

  module.exports = sequelize