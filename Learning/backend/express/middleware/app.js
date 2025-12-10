import express from "express";
const app = express();

// app.use((req, res, next)=>{
//     next();
// })

app.get('/', (req, res)=>{
    res.status(200).send("hello bhai");
});

const port = 3001;
app.listen(port, ()=>{
    console.log(`Serve is listening on port`, port);
});