const express = require('express');
const Product = require('../models/productsfetch.model');
const router = express.Router();



router.post('/',async (req,res) => {
    try {
        const products = await Product.create(req.body)
        return res.status(201).send({products})
    } catch(e) {
        return res.status(500).json({message:e.message,status:"failed"})
    }
})




router.get('/',async (req,res) => {
    try {
        const products = await Product.find().lean().exec()
        return res.status(200).send({products})
    } catch(e) {
        return res.status(500).json({message:e.message,status:"failed"})
    }
})



module.exports = router;