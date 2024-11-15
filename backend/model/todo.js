const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({ 

        description:String,
        status:  String, 
    });
    
    const todo = mongoose.model('todos', todoSchema);      

module.exports =todo;
