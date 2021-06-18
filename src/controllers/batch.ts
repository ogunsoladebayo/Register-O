import asyncHandler from "../middlewares/asyncHandler";
import Batch from "../models/Batch";

export const create = asyncHandler(async (req, res, next) => {
	const batch = await Batch.create(req.body);
	res.status(201).json({ success: true, details: batch });
});
