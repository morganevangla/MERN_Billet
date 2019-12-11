const mongoose = require("mongoose")
const Schema = mongoose.Schema


let Billet = new Schema({

    billet_titre:String,
    billet_content: String,
    date: {
         type: Date, default: Date.now
         }

});
module.exports = mongoose.model('Billet', Billet);
