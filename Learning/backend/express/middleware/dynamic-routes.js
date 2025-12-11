// Here we are creating Dynamic Routes:-

import express from "express";
const app = express();

app.use(express.json());


app.get('/multiply/:a/:b', (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({
        answer: a * b
    })
});

app.get('/divide/:a/:b', (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({
        answer: a / b
    })
    
});

app.get('/add/:a/:b', (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({
        answer: a + b
    })
});

app.get('/subtract/:a/:b', (req, res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({
        answer: a - b
    })
});


const port = 4000;
app.listen(port, ()=>{
    console.log(`Serve is listening on port`, port);
});