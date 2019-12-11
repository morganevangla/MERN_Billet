const express = require('express');
const cors = require('cors');
const billetRoutes = express.Router();

const Billet = require('../models/Billet');
billetRoutes.use(cors())

billetRoutes.route('/').get(function(req, res) {
    Billet.find(function(err, billets) {
        if (err) {
            console.log(err);
        } else {
            res.json(billets);
        }
    });
});

billetRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Billet.findById(id, function(err, billet) {
        res.json(billet);
    });
});

billetRoutes.route('/update/:id').post(function(req, res) {
    Billet.findById(req.params.id, function(err, billet) {
        if (!billet)
            res.status(404).send("data is not found");
        else
            billet.billet_titre = req.body.billet_titre;
            billet.billet_content = req.body.billet_content;

            billet.save().then(billet => {
                res.json('billet updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

billetRoutes.route('/add').post(function(req, res) {
    let billet = new Billet(req.body);
    
    billet.save()
        .then(billet => {
            res.status(200).json({'billet': 'billet added successfully'});
            console.log(billet);
        })
        .catch(err => {
            res.status(400).send('adding new billet failed');
            console.log(billet)
        });

       

});

module.exports = billetRoutes