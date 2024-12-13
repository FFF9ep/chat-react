import express from "express";
import authRoutes from "./Routes/auth.route.js";
import dotenv from "dotenv";
import connectDB from "./Lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", + PORT);
  connectDB();
});
