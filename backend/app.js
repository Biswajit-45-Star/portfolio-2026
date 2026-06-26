import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

dotenv.config();

connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://biswajit-sahu-v2.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});