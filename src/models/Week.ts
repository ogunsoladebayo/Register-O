import { DataTypes, Model, Optional } from "sequelize";
import { sequelize, Sequelize } from ".";

interface WeekAttributes {
	id: number;
	batchId: string;
	weekNumber: string;
}

interface WeekCreationAttributes extends Optional<WeekAttributes, "id"> {}

interface WeekInstance
	extends Model<WeekAttributes, WeekCreationAttributes>,
		WeekAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}

const Week = sequelize.define<WeekInstance>("Week", {
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
	weekNumber: {
		allowNull: false,
		type: DataTypes.INTEGER,
		unique: true,
	},
	batchId: {
		allowNull: false,
		type: DataTypes.UUID,
	},
});

export default Week;
