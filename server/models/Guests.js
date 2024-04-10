const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    date: Date,
    nationality: String
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel