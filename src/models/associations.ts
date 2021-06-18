import { sequelize } from ".";
import Admin from "./Admin";
import Batch from "./Batch";
import Coordinator from "./Coordinator";
import Course from "./Course";
import Student from "./Student";
import Week from "./Week";

const models = async () => {
	Batch.hasMany(Student, {
		sourceKey: "id",
		foreignKey: "studentId",
		as: "students",
	});

	// Student.belongsTo(Batch, {
	// 	foreignKey: "batchId",
	// 	as: "batch",
	// });

	Batch.hasMany(Week, {
		sourceKey: "id",
		foreignKey: "weekId",
		as: "weeks",
	});

	// Week.belongsTo(Batch, {
	// 	foreignKey: "batchId",
	// 	as: "batch",
	// });

	Week.hasMany(Course, {
		sourceKey: "id",
		foreignKey: "courseId",
		as: "courses",
	});

	// Course.belongsTo(Week, {
	// 	foreignKey: "weekId",
	// 	as: "week",
	// });

	// Coordinator.belongsTo(Batch, {
	// 	foreignKey: "batchId",
	// 	as: "batch",
	// });

	Batch.hasMany(Coordinator, {
		sourceKey: "id",
		foreignKey: "coordinatorId",
		as: "coordinators",
	});
	// await Admin.sync({ force: true });
	// await sequelize.sync({ force: true });
	// console.log("synced");
};

export default models;
