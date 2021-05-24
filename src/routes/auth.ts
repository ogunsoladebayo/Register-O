import express from "express";
import { login, register } from "../controllers/auth";

const Router = express.Router();

export default Router.post("/login", login).post("/register", register);
