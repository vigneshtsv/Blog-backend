import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/DataBase/database.js';
import authRouter from './src/Routers/authRouter.js';
import postRouter from './src/Routers/postRouter.js';

dotenv.config()
const app = express();

//database connected
connectDB();

app.use(cors())   //{origin: "*",credentials: true,}

app.use(express.json());
app.use("/api/auth",authRouter)
app.use("/api/post",postRouter)

//Error handler
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

app.get("/",(req,res) => {res.send("Server is Working")})

const PORT = process.env.PORT  || 3000;

app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)})