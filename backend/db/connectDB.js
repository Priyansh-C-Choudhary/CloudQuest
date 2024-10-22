import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


export const connectDB = async () => {
	try {
		console.log("mongo_uri: ", process.env.MONGO_URI);
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
		console.log("Mailtrap Token: ", process.env.MAILTRAP_TOKEN);
		console.log("Mailtrap Endpoint: ", process.env.MAILTRAP_ENDPOINT);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};
