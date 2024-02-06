const mongoose = require('mongoose');

const DATABASE_URL = "mongodb+srv://akshattrivedi32:aWqLHtILXUX8TLl6@knackclub-database.tdfdrkr.mongodb.net/";

const connectToDatabase = ()=> {
    try {
        mongoose.connect(DATABASE_URL);
        console.log("Database connected sucessfully!");
    } catch (error) {
        console.log("Failed to connect with database!")
    }
}

module.exports = connectToDatabase;