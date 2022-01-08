import Product from '../Models/Product.js';
import mongoose from 'mongoose';


export const getProducts = async (req, res, next) => {
    try{
        const data = await Product.find();

        res.status(200).json(data);
    }
    catch(err){
        res.status(409).send({message: err.message});
    }
}
export const createProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(201).json({message: "Product created successfully", product});
    }
    catch (err) {
        res.status(409).send({message: err.message});
    }
}