const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Guests');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://Guest:Capstone123@cluster0.imrm549.mongodb.net/DayOne", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDC connected"))
.catch(err => console.log('error', err));


/*app.get('/', async (req,res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

) */

app.put('/updateUser/:id', (req, res) =>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {name: req.body.name, email: req.body.email, phone: req.body.phone, date: req.body.date, nationality: req.body.nationality})
    .then(users => res.json(users))
    .catch(err => res.json(err))

})


app.get('/getUser/:id',(req, res) =>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err=> res.json(err))
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log('error', err));

// get users
app.get("/", async (req, res) => {
    try {
        const users = await UserModel.find({}).exec();
        res.json(users);
    } catch (err) {
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

// Delete user
app.delete('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserModel.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User successfully deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update user
/*app.put('/updateUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel
            .findByIdAndUpdate(id, req
            .body, { new: true }) // Use req.body here
            .exec();
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
); */

// Start
app.listen(3001, () => {
    console.log("server running");
});
