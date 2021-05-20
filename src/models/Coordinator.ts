import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

interface CoordinatorAttributes {
	id: string;
	name: string;
}

interface CoordinatorCreationAttributes
	extends Optional<CoordinatorAttributes, "id"> {}

interface CoordinatorInstance
	extends Model<CoordinatorAttributes, CoordinatorCreationAttributes>,
		CoordinatorAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}

const Coordinator = sequelize.define<CoordinatorInstance>("Coordinator", {
	id: {
		allowNull: false,
		autoIncrement: false,
		primaryKey: true,
		type: DataTypes.UUIDV4,
		unique: true,
	},
	name: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
});

export default Coordinator;
