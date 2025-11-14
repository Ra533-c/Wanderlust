const mongoose = require('mongoose');

// Agar ATLAS_URL environment variable set hai, to use use karo, warna local URL use karo.
const dbUrl = process.env.ATLAS_URL || 'mongodb://127.0.0.1:27017/wanderlust';

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Database is Connected Successfully");
    } catch (err){
        console.error("Database connection failed. Server startup aborted.");
        throw err; // Re-throw the error so the calling function can catch it
    }
}

module.exports = connectDB;