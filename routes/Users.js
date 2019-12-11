const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

//Récuperation des données de la page
users.post('/register', (req, res) => {
    const userData = {
        login: req.body.login,
        email: req.body.email,
        password: req.body.password,
        type: false
    }

    //Verification si le login existe
    User.findOne({
            login: req.body.login
        })
        .then(user => {
            //Si il existe pas on hash et le crée
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({
                                status: user.login + 'Utilisateur enregistré !'
                            })
                        })
                        .catch(err => {
                            res.send('Erreur : ' + err)
                        })
                })
            } else {
                res.json({
                    error: 'Utilisateur déja existant'
                })
            }
        })
        .catch(err => {
            res.send('Erreur : ' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
            login: req.body.login
        })

        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        login: user.login,
                        email: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                } else {
                    res.json({
                        error: "L'utilisateur n'existe pas"
                    })
                }
            } else {
                res.json({
                    error: "L'utilisateur n'existe pas"
                })
            }
        })
        .catch(err => {
            res.send("Erreur : " + err)
        })
})

users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization', process.env.SECRET_KEY])

    User.findOne({
            _id: decoded._id
        })
        .then(user => {
            if (!user) {
                res.send("L'utilisateur n'existe pas")
                
            } else {
                res.json(user)
            }
        })
        .catch(err => {
            res.send('Erreur : ' + err)
        })
})

module.exports = users