var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 4242
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  };

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27042/mernj04'

mongoose
.connect(mongoURI, options)
.then(()=> console.log("mongoDB connexion OK"))
.catch(err => console.log(err))

const router = express.Router();
router.use('/users', require('./routes/Users'))
router.use('/billets', require('./routes/Billets'))

// var Users = require('./routes/Users')
// var Billets = require('./routes/Billets')

// app.use('/users', Users);
app.use(router);

app.listen(port, () =>{
    console.log("Serveur en place sur le port : "+ port)
})