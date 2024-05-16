const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50)
    },
    idade: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
})

// User.sync({force: true})

module.exports = User