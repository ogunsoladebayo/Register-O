import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import models from "./models/associations";

dotenv.config();
models();

// import routes
import students from "./routes/students";

export const app = express();

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// mount routes
app.use("/v1/students", students);
