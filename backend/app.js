const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todo = require('./model/todo');

const app = express();
app.use(express.json());
app.use(cors());


app.get('/api/todo', async (req, res) => {
    const todo = await todo.find();
    res.json(todo);
});

app.post('/api/todo', async (req, res) => {
    const newTodo = new todo({
        description: req.body.description,
        status: req.body.status
    });
    const saved = await newTodo.save();
    res.json(saved);
});

app.put('/api/todo/:id', async (req, res) => {
    const { id } = req.params;
    const updated = await todoodo.findByIdAndUpdate(id, { status: req.body.status }, { new: true });
    res.json(updated );
});

app.delete('/api/todo/:id', async (req, res) => {
    const { id } = req.params;
    await todo.findByIdAndDelete(id);
    res.sendStatus(204);
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
