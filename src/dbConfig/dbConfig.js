import mongoose from "mongoose"


export async function connect() {

    try {
        mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB successfully connected!")
        })

        connection.on('error', (err) => {
            console.log("MongoDB connection error ||", err);
            process.exit();
        })

    } catch (error) {
        console.log("Something went wrong in mongoose connection:", error)
    }
}