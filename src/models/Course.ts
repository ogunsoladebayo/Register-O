import { DataTypes, Model, Optional } from "sequelize";
import { sequelize, Sequelize } from ".";

interface CourseAttributes {
	id: string;
	title: string;
	startTime: string;
	endTIme: string;
	lecturer: string;
	asstLecturer: string;
	weekId: string;
}

interface CourseCreationAttributes extends Optional<CourseAttributes, "id"> {}

interface CourseInstance
	extends Model<CourseAttributes, CourseCreationAttributes>,
		CourseAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}

const Course = sequelize.define<CourseInstance>("Course", {
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
	title: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	startTime: {
		allowNull: false,
		type: DataTypes.TIME,
	},
	endTIme: {
		allowNull: false,
		type: DataTypes.TIME,
	},
	lecturer: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	asstLecturer: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	weekId: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
});

export default Course;
