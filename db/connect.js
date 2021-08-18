import mongoose from 'mongoose';
let conn = null;
const connectDB = async () => {
	if (conn == null) {
		// Use new db connection
		conn = mongoose.connect(process.env.mongodburl, {
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
			bufferCommands: false, // Disable mongoose buffering
			serverSelectionTimeoutMS: 8000,
		}).then(() => mongoose);
		conn.mode
		await conn;
	}
	return conn;
};

export default connectDB;