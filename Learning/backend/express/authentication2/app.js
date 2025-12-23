const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

const jwt_secret = "123";

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
});

app.get("/read", (req, res)=>{
    console.log(req.cookies)
    res.send("READ ROUTE");
});

app.get("/compare", (req, res)=>{
    bcrypt.compare("Password@123", "$2b$10$O9M726zXdKvxipbPWN7lCOkV16D.0ynao47boxKIlK7CfatD2jRHi"
, function(err, result) {
    console.log(result);
   });
});

app.get("/jwt", (req, res)=>{
    let token = jwt.sign({email: "harsh@example.com", role: "user"}, jwt_secret, {expiresIn: "10sec"});
    console.log(token);
    res.cookie('token' , token);
    res.send("jwt")
});

app.get("/verify", (req, res)=>{
  let data = jwt.verify(req.cookies.token , jwt_secret);
  console.log(data);

});

const PORT = 3001;
app.listen(PORT , ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`)
});