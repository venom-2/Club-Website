const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : {
        type : Number
    },
    branch : {
        type : String
    },
    year : {
        type : String
    }

})

module.exports = mongoose.model('Student', studentSchema);