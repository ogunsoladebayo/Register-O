import express from "express";
import { add, all, del } from "../controllers/admins";
import { authorize, protect } from "../middlewares/auth";

const Router = express.Router();

export default Router.post("/add", protect, authorize, add)
	.get("/all", protect, authorize, all)
	.delete("/delete/:id", protect, authorize, del);
