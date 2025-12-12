const express = require("express");
const app = express();

app.use(express.json());


app.get("/", ((req, res)=>{
    res.sendFile(__dirname + "/public/index2.html");
}))

app.post("/sum", ((req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

     res.json({
        answer: a + b
     })
}))

const port = 3001;

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`);
});