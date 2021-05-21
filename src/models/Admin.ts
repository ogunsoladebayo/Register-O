import { DataTypes, Model, Optional } from "sequelize";
import { sequelize, Sequelize } from ".";

interface AdminAttributes {
	id: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	passwordToken: string;
	passwordTokenExpiration: string;
	isSuperAdmin: boolean;
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
		type: DataTypes.CHAR(255),
	},
	lastName: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	username: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	email: {
		allowNull: false,
		type: DataTypes.CHAR(255),
		unique: false,
		validate: { isEmail: true },
	},
	password: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	passwordToken: {
		allowNull: true,
		type: DataTypes.CHAR(20),
	},
	passwordTokenExpiration: {
		allowNull: true,
		type: DataTypes.DATE,
	},
	isSuperAdmin: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
	},
});

export default Admin;
