import mongoose from 'mongoose';

const connect = async () => {
    if (mongoose.connection.readyState !== 0) {
        return; // Already connected
    }

    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
        console.error("Mongo URL is not defined.");
        return;
    }

    try {
        await mongoose.connect(mongoUrl);
        console.log("Mongo connection success");
    } catch (error:any) {
        console.error("Database connection error", error.message);
    }
};

export default connect;
