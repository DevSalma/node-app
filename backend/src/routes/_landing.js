import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

//Route for getting a user from db based on their username(Landing Page)
router.get('/:username', async (req, res) => {
    try{
        if(!req.params.username ) {
            return res.status(400).json({
                message: 'Please include all required fields in the url: username'
            });
        };
        const { username } = req.params;
        const user = await User.findOne({username});
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        const returnedUser = {
            username: user.username,
            email: user.email,
        }
        return res.status(200).json(returnedUser);
    }catch (err) {
        console.log(err);
        return res.status(500).send({
             message: err.message,
        });
    };
});

export default router;