import express from 'express';
import mongoose from 'mongoose';
import { User } from './src/models/userModel.js';
import routes from './src/routes/index.js';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;
const mongodbUrl = process.env.DATABASE_URL;

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy (cross origin resource sharing policy)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-type']
}));

//Middleware for handling routes
app.use('/user', routes);

//Route for getting all user from db (Development use only)
app.get('/users', async (req, res) => {
    try{
        const users = await User.find({});
        return res.status(200).json(users);
    }catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err.message,
        })
    }
});

mongoose
    .connect(mongodbUrl)
    .then(() => {
        console.log('App is connected to Database!');
        app.listen(port, () => {
            console.log('Server started on port 1080!');
        });
    }
    ).catch((error) => {
        console.log(error);
    });