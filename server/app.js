import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

//Config
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
<<<<<<< HEAD
    origin: process.env.FRONTEND_URL,
=======
    origin:  process.env.FRONTEND_URL,
    credentials: true
>>>>>>> 23e87aaadce06c27604389be0cef377b03deb4d3
  })
);
app.use(morgan("dev"));
app.use("/public", express.static("uploads"));

export default app;
