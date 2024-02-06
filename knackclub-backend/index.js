const connectToDatabase = require('./db');
const express = require('express');
const cors = require('cors')

connectToDatabase();

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

// app.use(express.json()); // Add this line to parse JSON requests
// app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded requests

app.get('/',(req,res)=>{
    console.log("Hello Knack");
})

app.use('/becomemember',require('./Routes/studentMembership'));

app.use('/contact',require('./Routes/contact'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;