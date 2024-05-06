const { DataTypes } = require('sequelize')
const { Model } = require('sequelize')
const database = require('../database/connection.js')

const Usuario = database.define('usuarios', {
    nome: {
        type: DataTypes.STRING(30)
    },
    idade: {
        type: DataTypes.INTEGER
    },
    
},{
    createdAt: false,
    updatedAt: false
})

module.exports = Usuario