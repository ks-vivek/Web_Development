import express from "express";
const app = express();
import userSchem from "./dbSchema.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
dotenv.config();


app.use(express.json());


app.get('/', async (req, res) => {
    try{
         let allData = await userSchem.find();
         res.json({allData})
    }
    catch(err){
       res.json({
        message: "something went wrong!",
        message2: err.message
       })
    }
})

app.get('/create', async (req, res) => {
     try{
         let createdUser = await userSchem.create({
         name:"Vivek",
         username: "vivek0112",
         email: "vivel@exampl.com"
        });
        res.json({createdUser});
    }
    catch(err){
        res.json({
            message: "user detail not found"
        })
    } 
})



const PORT = 3001;


const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server is Listening on Port" ,PORT);
        })
    }
    catch ( err ) {
        console.log("Server is failed!");
    }
}

startServer();
