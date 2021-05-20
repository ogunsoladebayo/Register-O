import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

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
		autoIncrement: false,
		primaryKey: true,
		type: DataTypes.UUIDV4,
		unique: true,
	},
	firstName: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	lastName: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	middleName: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	gender: {
		allowNull: false,
		type: DataTypes.ENUM("M", "F"),
	},
	phoneNumber: {
		allowNull: false,
		type: DataTypes.CHAR(20),
	},
	email: {
		allowNull: true,
		type: DataTypes.CHAR(255),
		unique: false,
		validate: { isEmail: true },
	},
	cloudAbisId: {
		allowNull: false,
		type: DataTypes.CHAR(128),
	},
	batchId: {
		allowNull: false,
		type: DataTypes.UUIDV4,
	},
});

export default Student;
