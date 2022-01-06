import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


// routes import
import ProductRoute from './Routes/ProductRoute.js';


const app = express();
dotenv.config();

app.use(cors());

app.use('/api/v1/product',ProductRoute);


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) =>
        app.listen(PORT, () => console.log(`server running on port ${PORT} mongodb port ${data.connection.host}`)
    ))
    .catch((error) => 
        console.log(error.message)
    );

