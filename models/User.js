const mongoose = require("mongoose")
const Schema = mongoose.Schema

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
    }

})

module.exports = User = mongoose.model('users', UserSchema)