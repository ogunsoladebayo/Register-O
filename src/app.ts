import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import errorHandler from "./middlewares/error";
import models from "./models/associations";

dotenv.config();
models();

// import routes
import admins from "./routes/admins";
import auth from "./routes/auth";
import students from "./routes/students";

export const app = express();

app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
// mount routes
app.use("/v1/students", students);
app.use("/v1/auth", auth);
app.use("/v1/admin", admins);

app.use(errorHandler);
