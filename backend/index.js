import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to accept requests from both development and production
const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse incoming cookies

// API Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB and start the server
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port:", PORT);
});
