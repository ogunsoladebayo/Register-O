import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { sequelize } from "./models";

dotenv.config();

// import routes

export const app = express();

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// mount routes
