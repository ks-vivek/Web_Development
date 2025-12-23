const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomharkiratilovekiara";
const app = express();
app.use(express.json());

const users = [];

app.post('/signup', (req, res)=>{
    const username =  req.body.username;
    const password =  req.body.password;

    users.push({
        username : username,
        password : password 
    })
    res.status(200).json({
        message: "You are Signed up"
    })
});

app.post('/signin', (req, res)=>{
    const username =  req.body.username;
    const password =  req.body.password;

    // map and filter 
    let foundUser = null;   
for(let i = 0; i< users.length; i++){
     if(users[i].username === username && users[i].password === password){
        foundUser = users[i];
        }
}

if(foundUser){
    const token = jwt.sign({
        username: username,
        },JWT_SECRET);

    // foundUser.token= token;
    res.status(200).json({
        message:"You have Successfully Signing in",
        token:token
    })
}else{
    res.status(403).send({
        message:"Invalid username or password"
    })
}

    // const user = users.find(function(u){
    //     if(u.username === username && u.password === password){

    //     }
    // })
});

app.get('/me', (req, res)=>{
    const token = req.headers.token;
     const decodedInformation = jwt.verify(token, JWT_SECRET); 
     const username = decodedInformation.username
    // let user = users.find(u=>{
    //     if(u.token == token) return true;
    // })
     
    // Another Way:-
    let user = users.find(u=> u.username === username);
   

    if(user){
        res.json({
            username: user.username,
            password: user.password
        })
    }
    else{
            res.status(401).json({
                message:"Invalid Token"
            })
        }
//     let foundUser = null;

// for(let i = 0; i < users.length; i++)
//       if(users[i].token == token){
//         foundUser = users[i]; 
//       }
//         if(foundUser){
//         res.status(200).json({
//             username : foundUser.username,
//             password : foundUser.password
//         }) 
//         }
//         else{
//             res.status(401).json({
//                 message:"Invalid Token"
//             })
//         }
})

const PORT = 3001;

app.listen( PORT , ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
});