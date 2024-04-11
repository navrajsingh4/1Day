const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel=require('./models/Guests')
const app = express()
app. use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://Guest:Capstone123@cluster0.imrm549.mongodb.net/DayOne")

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

app.get('/getUser/',(req, res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log('Could not connect to MongoDB:', err));

// get users
app.get("/", async (req, res) => {
    try {
        const users = await UserModel.find({}).exec(); // Use exec to get a true Promise
        res.json(users);
    } catch (err) {
        // This will catch any errors that occur during the finding process
        res.status(500).json({ error: err.message });
    }
});

// Create user
app.post("/createUser", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Retrieve user by ID 
app.get('/getUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id).exec(); // Use exec here as well
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start
app.listen(3001, () => {
    console.log("Server is Running");
});
