const mongoose = require('mongoose');

const DATABASE_URL = "mongodb://localhost:27017/knackclub";

const connectToDatabase = ()=> {
    try {
        mongoose.connect(DATABASE_URL);
        console.log("Database connected sucessfully!");
    } catch (error) {
        console.log("Failed to connect with database!")
    }
}

module.exports = connectToDatabase;