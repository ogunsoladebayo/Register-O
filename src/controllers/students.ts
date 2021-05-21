import asyncHandler from "../middlewares/asyncHandler";
import Student from "../models/Student";
import ErrorResponse from "../utils/errorResponse";

// @desc      Register user
// @route     POST /api/auth/register
// @access    Public
export const register = asyncHandler(async (req, res, next) => {
	await Student.sync();
	const user = await Student.create({ ...req.body });
	res.status(201).json({
		success: true,
		message: "Student details registered successfully",
		// token: user.signJwt,
	});
});
