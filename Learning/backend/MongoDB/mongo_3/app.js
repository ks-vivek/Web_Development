const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("LEARNING MONGODB");
});


const PORT = 3002;
app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
});