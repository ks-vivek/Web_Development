const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser())

app.get("/", (req, res)=>{
    const saltrounds = 10;
    const myPassword = "Password@123";
    bcrypt.genSalt(saltrounds, function(err, salt){
        bcrypt.hash(myPassword, salt, function(err, hash){
            console.log(hash);
        })
    })
    res.cookie("name", "cookie")
    res.json({
        message: "learning bcrypt"
    })
})

app.get("/read", (req, res)=>{
    console.log(req.cookies)
    res.send("READ ROUTE");
})



const PORT = 3001;
app.listen(PORT , ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
})