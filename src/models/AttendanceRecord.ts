const fields = ["student", "week", "course", "date"];

import { DataTypes, Model, Optional } from "sequelize";
import { sequelize, Sequelize } from ".";

interface AttendanceRecordAttributes {
	id: string;
	student: string;
	week: string;
	course: string;
	date: string;
}

interface AttendanceRecordCreationAttributes
	extends Optional<AttendanceRecordAttributes, "id"> {}

interface AttendanceRecordInstance
	extends Model<
			AttendanceRecordAttributes,
			AttendanceRecordCreationAttributes
		>,
		AttendanceRecordAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}

const Course = sequelize.define<AttendanceRecordInstance>("Course", {
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
	student: {
		allowNull: false,
		type: DataTypes.UUID,
	},
	week: {
		allowNull: false,
		type: DataTypes.UUID,
	},
	course: {
		allowNull: false,
		type: DataTypes.UUID,
	},
	date: {
		allowNull: false,
		type: DataTypes.DATE,
	},
});

export default Course;
