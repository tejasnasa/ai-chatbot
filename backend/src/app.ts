import express from "express";
import { config } from "dotenv";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

config();

export default app;
