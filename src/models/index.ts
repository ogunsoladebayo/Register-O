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

export { Sequelize, sequelize };
