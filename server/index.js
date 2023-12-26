import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import { resError } from "./utils/errorHandler.js";
import authRoute from "./routes/v1/auth.route.js";
import postRoute from "./routes/v1/post.route.js";
import commentRoute from "./routes/v1/comment.route.js";
import userRoute from "./routes/v1/user.route.js";



dotenv.config();

export const port = process.env.PORT || 3000;
//Conexión a la base de datos

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/posts/comment", commentRoute);

//Handler Error
app.use((err, req, res, next) => {
  resError(res, err.statuscode || 500, err.message);
});

//Connect DB
connectDB();

app.listen(port, () => {
  console.log("Listening on port " + port);
});
