import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/hi", (req, res) => {
    res.send("hi bhai");
  });

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));