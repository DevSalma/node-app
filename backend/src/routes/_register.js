import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

//Route for registering user and adding to db(Register Page)
router.post('/', async (req, res) => {
    try{
        const { username, password } = req.body;
        const result = await User.findOne({username});
        if(result) {
            return res.status(400).json({ message: 'Username already exists' });
        };
        const hash = await bcrypt.hash(password, 10);

        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: hash
        };
        const user = await User.create(newUser);
        return res.status(200).json({
            message: 'User has been registerd successfully!',
            user
        });
    }catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err.message,
        });
    }
});

export default router;