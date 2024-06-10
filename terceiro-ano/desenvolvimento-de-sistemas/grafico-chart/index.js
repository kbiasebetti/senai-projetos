const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

let mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto']
let data = [65, 59, 80, 81, 56, 55, 40, 25]

app.get('/data', (req,res) => {
    try{
        res.status(200).json({Mes: mes, Data: data})
    }catch(err){
        console.log(err)
        res.status(500)
    }
})

app.listen(3000)
