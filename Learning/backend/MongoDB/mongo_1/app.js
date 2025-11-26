import express from "express";
import connectDB from "./db.js";
const app = express();
import dotenv from 'dotenv';

dotenv.config();

app.use(express.json());

import helloSchema from './dbSchema.js'

app.get("/", async ( req, res ) => {
    try {
        const allData = await helloSchema.find();
        res.json({
            allData
        })
    }
    catch ( err ) {
        res.json({
            message : "Bhai fail ho gaya",
            message2 : err.message
        })
    }
})

app.post('/henry', async ( req, res ) => {
    try {
        const { first, last, mobile } = req.body;

        const postData = await helloSchema.create({
            first : first,
            last : last,
            mobile : mobile
        })

        res.status(201).json({
            message : "Ban gaya",
            postData
        })
    }
    catch ( err ) {
        res.json({
            message : "Bhai fail ho gaya",
            message2 : err.message
        })
    }
})

const PORT = 4000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("SERVER CHAL GAYA LAUDE");
        })
    }
    catch ( err ) {
        console.log("SERVER NAHI CHALA");
    }
}

startServer();