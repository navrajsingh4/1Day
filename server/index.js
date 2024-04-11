const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel=require('./models/Guests')

const app = express()
app. use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://Guest:Capstone123@cluster0.imrm549.mongodb.net/DayOne")

app.get('/', async (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

)

app.put('/updateUser/:id', (req, res) =>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {name: req.body.name, email: req.body.email, phone: req.body.phone, date: req.body.date, nationality: req.body.nationality})
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err=> res.json(err))
}
)

app.get('/getUser/:id',(req, res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})

app.listen(3001,() => {
    console.log("Server is Running")
})