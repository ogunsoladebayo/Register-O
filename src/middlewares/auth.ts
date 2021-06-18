import * as jwt from "jsonwebtoken";
import Admin from "../models/Admin";
import ErrorResponse from "../utils/errorResponse";

// Protect routes
export const protect = async (req, res, next) => {
	let token: string;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		// Set token from Bearer token in header
		token = req.headers.authorization.split(" ")[1];
		// Set token from cookie
	}
	// else if (req.cookies.token) {
	//   token = req.cookies.token;
	// }

	// Make sure token exists
	if (!token) {
		return next(
			new ErrorResponse(
				"Not authorized to access this route, no token",
				401,
			),
		);
	}

	try {
		// Verify token
		const decoded: any = jwt.verify(token, process.env.JWT_SECRET);
		const id = decoded.id;

		// find user in database
		const user: any = await Admin.findByPk(id);
		req.user = user;
		next();
	} catch (err) {
		console.log(err);
		return next(
			new ErrorResponse("Not authorized to access this route", 401),
		);
	}
};

// Grant access to specific roles
export const authorize = async (req, res, next) => {
	if (!req.user.isSuperAdmin) {
		return next(
			new ErrorResponse(
				`User role ${req.user.role} is not authorized to access this route`,
				403,
			),
		);
	}
	next();
};
