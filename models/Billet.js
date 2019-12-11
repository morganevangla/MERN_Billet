const mongoose = require("mongoose")
const Schema = mongoose.Schema



const MesBillets = new Schema({

    billet_titre: {
        type: String,
        required: true
    },
    billet_content: {
        type: String,
        required: true
    },
    date: {
        type: Date, default: Date.now
        },

        user_id: [

            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users"
            }
        ]
},
    {
        collection: "Billets",
        usePushEach: true
    })

const Billets = mongoose.model('Billets', MesBillets);
exports.Billets = Billets