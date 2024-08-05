import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

//Route for user logging in(Login Page)
router.post('/', async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email: email.toLowerCase()});
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        };
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({
                message: "Incorrect password! Please try again."
            });
        };
        return res.status(200).json({
            message: "User has logged in succesfully", 
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