const express = require('express');
const {body,validationResult} = require('express-validator');
const Contact = require('../models/Contact');
const route = express();

route.post('/', [
    body('email').isEmail(),
],async(req,res)=>{
    try {

        const result = await validationResult(req);

        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }

        const {name,email,subject,message} = req.body;

        const newContact = new Contact({
            name : name,
            email : email,
            subject : subject,
            message : message
        });
        const response = await newContact.save();

        res.status(200).json({ message: 'Data saved successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

module.exports = route;