import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { errorHandler } from "./utils/errorHandler";
import usersRouter from "./router/user";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/users", usersRouter);
app.use(errorHandler);

const PORT = process.env.APP_URL || 3000;

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL!);
    console.log("database was connected successfully");
    app.listen(PORT, () => {
      console.log(`server is running at port ${PORT}`);
    });
  } catch (ex) {
    console.error(ex);
  }
};

start();
