const mongoose = require("mongoose")
const Schema = mongoose.Schema


// const MesBillets = new Schema({

//     billet_titre: {
//         type: String,
//         required: true
//     },
//     billet_content: {
//         type: String,
//         required: true
//     },
//     date: {
//         type: Date, default: Date.now
//         },

//         user_id: [

//             {
//                 type: Schema.Types.ObjectId,
//                 ref: "users"
//             }
//         ]
// },
//     {
//         collection: "Billets",
//         usePushEach: true
//     })

// const Billets = mongoose.model('Billets', MesBillets);
// exports.Billets = Billets

const UserSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    type: {
        type: Boolean,
        default: false
    },

},
{
    collection: "users",
    usePushEach: true
}
)

module.exports = User = mongoose.model('users', UserSchema)