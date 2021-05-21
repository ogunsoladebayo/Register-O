import { DataTypes, Model, Optional } from "sequelize";
import { sequelize, Sequelize } from ".";

interface CoordinatorAttributes {
	id: string;
	name: string;
	batchId: string;
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
		type: DataTypes.UUID,
		unique: true,
		defaultValue: Sequelize.literal(
			"uuid_in(md5(random()::text || clock_timestamp()::text)::cstring)",
		),
	},
	name: {
		allowNull: false,
		type: DataTypes.CHAR(255),
	},
	batchId: {
		allowNull: false,
		type: DataTypes.UUID,
	},
});

export default Coordinator;
