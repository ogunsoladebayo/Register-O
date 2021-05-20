import fs from "fs";
import path from "path";
import { DataTypes, Sequelize } from "sequelize";

const basename = path.basename(__filename);
const db = {};

const config = {
	url: process.env.DB_URL,
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	options: { dialect: "postgres", ssl: { require: false } },
};

const sequelize = config.url
	? new Sequelize(config.url, config)
	: new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".ts"
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(sequelize, DataTypes);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
	db[modelName]
		.sync()
		.then((result: any) => {
			console.log("synced");
		})
		.catch((err) => {
			console.log(err);
		});
});

export { Sequelize, sequelize };
