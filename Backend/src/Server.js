import express from "express";
import authRoutes from "./Routes/auth.route.js";
import messageRoutes from "./Routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./Lib/db.js";
import cookieParser from "cookie-parser"; //cookie parser
import cors from "cors";
import path from "path";
import { app, server } from "./Lib/socket.js"; //live

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

//Listener
server.listen(PORT, () => {
  console.log("Server is running on PORT: " + PORT);
  connectDB();
});