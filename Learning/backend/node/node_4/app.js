const express = require('express');
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname, "./public")))

app.get("/", function(req, res){
    res.send("<b> hi there </b>")
    // if you send more than two response it will give an error;

    // res.send("<b> hi there </b>")
    
})
app.post('/', function(req, res){
    res.send("hello dunia main hooon khalnaayak");
})
app.get("/", (req, res)=>{
    res.send("hello");
})


app.listen(3000);