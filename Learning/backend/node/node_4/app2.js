const express = require("express");
const app = express();

let todos = [];

app.post('/', function(req, res){
    // create a random id for the todo
    //extract the todo tittle from the body
    todos.push({
        tittle, 
        id, 
    })
})

app.delete('/', function(req, res){
    // extract the todo id 
    // remove the todo form here
})

app.get('/', function(req, res){
    res.json({
        todos
    })
})


const PORT = 3001;

app.listen(PORT , function(){
    console.log(`Server is listening on ${PORT} port`);
})