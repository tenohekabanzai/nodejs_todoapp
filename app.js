import express from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/tasks.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


export const app = express();

dotenv.config({
    path:"./data/config.env"
})

// Using MiddleWare to fetch json request
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
}));
// Using MiddleWare to use Routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);

app.use(cookieParser());


