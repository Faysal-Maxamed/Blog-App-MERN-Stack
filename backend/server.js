import express from  'express';
import dotenv from "dotenv";
import connectdb from './config/db.js';
import UserRouter from './controllers/userController.js';
import cors from 'cors';
const app =express();
app.use(express.json());
app.use(express.Router());
app.use(cors());
dotenv.config();
const port=4000

app.get('/',(req,res)=>{
    res.send("hellow world i from Mobile App developer")
})
connectdb();
app.use("/api/users",UserRouter);

app.listen(port,()=>{
    console.log(`server is running port on port `)
})
