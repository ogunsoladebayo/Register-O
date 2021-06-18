import { Op } from "sequelize";
import asyncHandler from "../middlewares/asyncHandler";
import Admin from "../models/Admin";
import ErrorResponse from "../utils/errorResponse";

// @desc      Add a new admin
// @route     POST /api/admin/add
// @access    Super Admin
export const add = asyncHandler(async (req, res, next) => {
	const admin = await Admin.create({ ...req.body });
	res.status(201).json({
		success: true,
		message: "Admin details registered successfully",
		admin: {
			email: admin.email,
			firstName: admin.firstName,
			lastName: admin.lastName,
			phoneNumber: admin.phoneNo,
			isSuperAdmin: admin.isSuperAdmin,
		},
	});
});

// @desc      Delete an existing admin
// @route     POST /api/admin/delete
// @access    Super Admin
export const del = asyncHandler(async (req, res, next) => {
	const admin = await Admin.destroy(req.params.id);
	if (!admin) {
		return next(new ErrorResponse("Admin not found", 404));
	}
	res.status(200).json({
		success: true,
		message: "Admin deleted successfully",
	});
});

// @desc      Get all existing admins
// @route     POST /api/admin/all
// @access    Super Admin
export const all = asyncHandler(async (req, res, next) => {
	const admins = await Admin.findAll({
		attributes: {
			exclude: [
				"password",
				"resetPasswordToken",
				"passwordTokenExpiration",
				"jwt",
			],
		},
		where: {
			id: { [Op.ne]: req.user.id },
		},
	});

	if (!admins.length) {
		return next(new ErrorResponse("You have not added any admin yet", 404));
	}
	res.status(200).json({
		success: true,
		admins,
	});
});
