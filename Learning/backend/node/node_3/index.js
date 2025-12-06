import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";

app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res)=>{
     res.sendFile(path.join(__dirname, "file", "index.html"));
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