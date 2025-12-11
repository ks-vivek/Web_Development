import express from "express";
const app = express();


app.get('/multiply', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.status(200).json({
        answer: a * b
    })
});

app.get('/divide', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.status(200).json({
        answer: a / b
    })
    
});

app.get('/add/:a/:b', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.status(200).json({
        answer: a + b
    })
});


// Creating Dynamic Routes:-
// app.get('/add/:a/:b', (req, res)=>{
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     res.status(200).json({
//         answer: a + b
//     })
// });

app.get('/subtract', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.status(200).json({
        answer: a - b
    })
});


const port = 3000;
app.listen(port, ()=>{
    console.log(`Serve is listening on port`, port);
});