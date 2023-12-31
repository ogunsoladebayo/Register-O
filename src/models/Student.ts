import { DataTypes, Model, Optional } from "sequelize";
import { sequelize, Sequelize } from ".";

interface StudentAttributes {
	id: string;
	firstName: string;
	lastName: string;
	middleName: string;
	gender: string;
	phoneNumber: string;
	email: string;
	cloudAbisId: string;
	batchId: string;
}

interface StudentCreationAttributes extends Optional<StudentAttributes, "id"> {}

interface StudentInstance
	extends Model<StudentAttributes, StudentCreationAttributes>,
		StudentAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}

const Student = sequelize.define<StudentInstance>("Student", {
	id: {
		allowNull: false,
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
	middleName: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	gender: {
		allowNull: false,
		type: DataTypes.ENUM("M", "F"),
	},
	phoneNumber: {
		allowNull: false,
		type: DataTypes.STRING(20),
	},
	email: {
		allowNull: true,
		type: DataTypes.STRING,
		unique: false,
		validate: { isEmail: true },
	},
	cloudAbisId: {
		allowNull: false,
		type: DataTypes.STRING(128),
	},
	batchId: {
		allowNull: false,
		type: DataTypes.UUID,
	},
});

export default Student;
