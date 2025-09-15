// antes de tudo, digitar "npm init" e instalar (npm install express body-parser ejs)
//após, digitar isso
const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

// vai abrir um ejs = html
app.get("/lucas",(req,res) => {
    nome = "lucas"
    console.log(nome)
    res.render("lucas", {nome})
})

app.get("/João",(req,res) => {
    nome = "João"
    console.log(nome)
    res.render("João", (nome))
})

// rotas aqui
app.listen(3000,() => {
    console.log("Servidor rodando em http://localhost:3000")
})

