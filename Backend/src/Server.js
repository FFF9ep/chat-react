import express from "express";
import authRoutes from "./Routes/auth.route.js";
import dotenv from "dotenv";
import connectDB from "./Lib/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", + PORT);
  connectDB();
});
