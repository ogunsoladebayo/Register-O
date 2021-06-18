import * as bcrypt from "bcryptjs";
import crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize, Sequelize } from ".";

interface AdminAttributes {
	id: string;
	firstName: string;
	lastName: string;
	phoneNo: string;
	email: string;
	password: string;
	resetPasswordToken: string;
	passwordTokenExpiration: Date;
	isSuperAdmin: boolean;
	jwt: string;
}

interface AdminCreationAttributes extends Optional<AdminAttributes, "id"> {}

interface AdminInstance
	extends Model<AdminAttributes, AdminCreationAttributes>,
		AdminAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}

const Admin = sequelize.define<AdminInstance>("Admin", {
	id: {
		allowNull: false,
		autoIncrement: false,
		primaryKey: true,
		type: DataTypes.UUID,
		unique: true,
		defaultValue: Sequelize.literal(
			"uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)",
		),
	},
	firstName: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	lastName: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	phoneNo: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING,
		unique: true,
		validate: { isEmail: true },
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING,
		set(value: string) {
			const salt = bcrypt.genSaltSync(10);
			const password = bcrypt.hashSync(value, salt);
			this.setDataValue("password", password);
		},
	},
	resetPasswordToken: {
		allowNull: true,
		type: DataTypes.STRING,
		set(value: string) {
			// Hash token and set to resetPasswordToken field
			const resetPasswordToken = crypto
				.createHash("sha256")
				.update(value)
				.digest("hex");
			this.setDataValue("resetPasswordToken", resetPasswordToken);
			// Set expire
			this.setDataValue(
				"passwordTokenExpiration",
				new Date(Date.now() + 10 * 60 * 1000),
			);
		},
	},
	passwordTokenExpiration: {
		allowNull: true,
		type: DataTypes.DATE,
	},
	isSuperAdmin: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},

	jwt: {
		type: DataTypes.VIRTUAL,
		get() {
			return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
				expiresIn: process.env.JWT_EXPIRE,
			});
		},
	},
});

export default Admin;
