const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
        console.log("Database is Connected Successfully");
    } catch (err){
        console.log("connection failed :", err);
    }
}

module.exports = connectDB;