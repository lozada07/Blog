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
    origin: "http://localhost:5173",
  })
);
app.use(morgan("dev"));
app.use("/public", express.static("uploads"));

export default app;