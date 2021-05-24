import { DataTypes, Model, Optional } from "sequelize";
import { sequelize, Sequelize } from ".";

interface BatchAttributes {
	id: string;
	name: string;
	startDate: Date;
	endDate: Date;
	frequency: string;
	coordinatorId: string;
	studentId: string;
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
		type: DataTypes.UUID,
		unique: true,
		defaultValue: Sequelize.literal(
			"uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)",
		),
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
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
		type: DataTypes.UUID,
	},
	studentId: {
		allowNull: false,
		type: DataTypes.UUID,
	},
});

export default Batch;
