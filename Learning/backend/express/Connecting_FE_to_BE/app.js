const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
const JWT_SECRET = "helloworldkaisehosaare"

const users = [];


app.post("/signup" , async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        username: username, 
        password: hashedPassword
    });

    res.status(200).json({
        message: "You have Successfully signup"
    });

});

app.post("/signin", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
     const user = users.find(u=> u.username === username);
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
     if (!isPasswordCorrect) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    if(user){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);
    
        res.status(200).json({
            message: "You have Successfully Signin",
            token: token
        });
    }else{
        res.status(401).json({
            message:"Username or Password Invalid"
        })
    }
});

const auth = ((req, res, next)=>{

    const token = req.headers.authorization;
    const decodedInformation = jwt.verify(token , JWT_SECRET);

    if(decodedInformation.username){
        req.username = decodedInformation.username;
        next();
    }else{
        res.status(401).json({
            message: "You are not logged in"
        })
    }
})

app.get("/me", auth,  (req, res)=>{
     const user = users.find(u=> u.username == req.username);

    if(user){
        res.status(200).json({
            username: user.username,
            password: user.password
        })
    }else{
        res.status(403).json({
            message:"Token Invalid"
        });
    }
});



const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost${PORT}`);
});