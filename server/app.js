import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


import morgan from "morgan";

const app = express();

//Config
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin:  process.env.FRONTEND_URL,
    credentials: true
  })
);
app.use(morgan("dev"));
app.use("/public", express.static("uploads"));

export default app;
