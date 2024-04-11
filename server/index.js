const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Guests');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Guest:Capstone123@cluster0.imrm549.mongodb.net/DayOne", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log('error', err));

app.get("/", async (req, res) => {
    try {
        const users = await UserModel.find({}).exec();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/createUser", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
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
app.put('/updateUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel
            .findByIdAndUpdate(id, req
            .body, { new: true }) 
            .exec();
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);

app.listen(3001, () => {
    console.log("server running");
});