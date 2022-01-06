import Product from '../Models/Product.js';
import mongoose from 'mongoose';

export const createProduct = async (req, res) => {

    try {
        // const product = await Product.create(req.body);
        res.status(201).json("hello i m there");
    }
    catch (err) {
        res.status(409).send({message: err.message});
    }
}