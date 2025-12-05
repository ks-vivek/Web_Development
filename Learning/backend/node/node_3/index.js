import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello duniya");
});


const PORT = 4001;

const startServer = ()=>{
    try{
         app.listen(PORT, ()=>{
            console.log(`Server is listening on ${PORT} Port`)
        })
    }
    catch{
        console.log('Server is not listening')
    }
};
startServer();