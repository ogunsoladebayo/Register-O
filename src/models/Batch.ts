import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

interface BatchAttributes {
	id: string;
	name: string;
	startDate: string;
	endDate: string;
	frequency: string;
	coordinatorId: string;
}

interface BatchCreationAttributes extends Optional<BatchAttributes, "id"> {}

interface BatchInstance
	extends Model<BatchAttributes, BatchCreationAttributes>,
		BatchAttributes {
	createdAt?: Date;
	updatedAt?: Date;
}

const Batch = sequelize.define<BatchInstance>("Batch", {
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
	startDate: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	endDate: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	frequency: {
		allowNull: false,
		type: DataTypes.ARRAY(DataTypes.INTEGER),
	},
	coordinatorId: {
		allowNull: false,
		type: DataTypes.UUIDV4,
	},
});

export default Batch;
