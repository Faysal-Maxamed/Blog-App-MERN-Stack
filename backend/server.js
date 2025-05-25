import express from  'express';
import dotenv from "dotenv";
import connectdb from './config/db.js';
import UserRouter from './controllers/userController.js';
import cors from 'cors';
import PostsRouter from './controllers/PostController.js';
import cookieParser from 'cookie-parser';
const app =express();
app.use(express.json());
app.use(express.Router());
app.use(cors());
app.use(cookieParser());
dotenv.config();
const port=4000

app.get('/',(req,res)=>{
    res.send("hellow world i from Mobile App developer")
})
connectdb();
app.use("/api/users",UserRouter);
app.use("/api/posts/",PostsRouter)

app.listen(port,()=>{
    console.log(`server is running port on port `)
})
