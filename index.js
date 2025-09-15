
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000,() => {
    console.log("Servidor rodando em http://localhost:3000")
})

