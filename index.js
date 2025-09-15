const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.get("/joão",(req,res) => {
    nome = "João"
    console.log(nome)
    res.render("João", {nome})
})
app.get("/lucas",(req,res) => {
    nome = "lucas"
    console.log(nome)
    res.render("lucas",(nome))
})
app.get("/login",(req,res) => {

    res.render('login');
})
app.post("/logando",(req,res) => {
    const usuario = req.body.usuario
    const senha = req.body.senha
    console.log(usuario)
    if(usuario != "João" )