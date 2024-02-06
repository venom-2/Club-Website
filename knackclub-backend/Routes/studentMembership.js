const express = require('express');
const {body,validationResult} = require('express-validator');
const Student = require('../models/Student');
const route = express();

route.post('/userdetails', [
    body('email').isEmail(),
    body('phone').isLength({ min: 10, max: 10 }).withMessage('Phone number must be 10 digits'),
],async(req,res)=>{
    try {

        const result = await validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const {name,email,phone,branch,year} = req.body;

        const exist = await Student.findOne({email : email});
        if(exist) {
            res.status(200).json({ message: 'User already exists' });
        }

        const newUser = new Student({
            name : name,
            email : email,
            phone : phone,
            branch : branch,
            year : year
        });
        const response = await newUser.save();

        res.status(200).json({ message: 'User details added successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

module.exports = route;