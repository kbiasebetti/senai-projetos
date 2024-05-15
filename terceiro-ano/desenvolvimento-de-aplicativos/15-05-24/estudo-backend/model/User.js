const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('users', {
    nome: {
        type: DataTypes.STRING(50)
    },
    idade: {
        type: DataTypes.INTEGER
    },
    turma: {
        type: DataTypes.STRING(20)
    }
}, {
    createdAt: false,
    updatedAt: false
})

// User.sync({force: true})

module.exports = User