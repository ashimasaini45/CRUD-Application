import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv:${username}:${password}@crud-app-shard-00-00.3w838.mongodb.net:27017,crud-app-shard-00-01.3w838.mongodb.net:27017,crud-app-shard-00-02.3w838.mongodb.net:27017/?ssl=true&replicaSet=atlas-f4ox9s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=crud-app`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
};

export default Connection;
