import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import chalk from "chalk";
import connectDB from "../backend/config/db.js";
import userRoutes from "../backend/routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to BlackRock app</h1>");
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    chalk.bgCyan.white(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`)
  );
});
