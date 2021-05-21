import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

interface WeekAttributes {
	id: number;
	batchId: string;
	courseId: string;
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
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
		unique: true,
		validate: { isNull: true },
	},
	batchId: {
		allowNull: false,
		type: DataTypes.UUID,
	},
	courseId: {
		allowNull: false,
		type: DataTypes.UUID,
	},
});

export default Week;
