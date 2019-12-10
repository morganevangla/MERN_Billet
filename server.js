var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 4242

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27042/mernj04'

mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(()=> console.log("mongoDB connexion OK"))
.catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, () =>{
    console.log("Serveur en place sur le port : "+ port)
})