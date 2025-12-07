// This is all about middleware:-


const express = require("express");
const app = express();


// function that returns a Boolean if the age is greater than 14
// function ageChecker(age){
//     if(age >= 14){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

  const middleware =((req, res, next)=>{
    const age = Number(req.query.age);
    if(age >= 14){
      next();
    }
    else{
        res.json({
            msg: "sorry your age is not full fill our policies"
        })
    }
})
// app.use(middleware);

app.get("/ride1" , middleware ,  (req , res)=>{
        res.status(200).json({
            msg: "You have successfully riden the ride 1"
        })
})

app.get("/ride2" ,middleware,  (req , res)=>{
        res.status(200).json({
            msg: "You have successfully riden the ride 2"
        })
})


const PORT = 3002;

app.listen(PORT , function(){
    console.log(`Server is listening on ${PORT} port`);
})
