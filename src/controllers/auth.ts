import * as bcrypt from "bcryptjs";
import asyncHandler from "../middlewares/asyncHandler";
import Admin from "../models/Admin";
import ErrorResponse from "../utils/errorResponse";

// @desc      Login user
// @route     POST /v1/auth/login
// @access    Public
export const login = asyncHandler(async (req, res, next) => {
	const { username, password } = req.body;

	// Validate email & password
	if (!username || !password) {
		return next(
			new ErrorResponse("Please provide an email and password", 400),
		);
	}

	// Check for user
	const admin = await Admin.findOne({ where: { username } });

	if (!admin) {
		return next(new ErrorResponse("Invalid credentials", 401));
	}

	// Check if password matches
	const isMatch = await bcrypt.compare(password, admin.password);
	if (!isMatch) {
		return next(new ErrorResponse("Invalid credentials", 401));
	}

	res.status(201).json({
		success: true,
		token: admin.jwt,
	});
});

export const register = asyncHandler(async (req, res, next) => {
	const admin = await Admin.create(req.body);
	res.status(201).json({ success: true, details: admin });
});
