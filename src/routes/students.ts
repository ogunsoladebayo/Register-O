import express from "express";
import { register } from "../controllers/students";

const Router = express.Router();

export default Router.post("/register", register);
