const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel=require('./models/Guests')
const app = express()
app. use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://Guest:Capstone123@cluster0.imrm549.mongodb.net/DayOne")
//mongoose.connect("mongodb://127.0.0.1:27017/DayOne")

app.get("/", async (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .then(err => res.json(err))
}

)

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err=> res.json(err))
}
)

app.listen(3001,() => {
    console.log("Server is Running")
})