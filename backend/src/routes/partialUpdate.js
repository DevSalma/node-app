import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

//Route for updating partial user details on db based on their id(Extra route)
router.patch('/:id', async (req, res) => {
    if(!req.params.id) {
        return res.status(400).json({
            message: 'Please include all required fields in the url: id'
        });
    };
    const { id } = req.params;
    const updatedField = req.body;
    const key = Object.keys(updatedField);
    if (key.length !== 1) {
        return res.status(200).send({
            message: 'User can only update one field at a time. Please try again..',
        });
    };
    try {
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        if(updatedField.password) {
            const hash = await bcrypt.hash(req.body.password, 10);
            const updatedPass = {
                password: hash
            };
            await User.findByIdAndUpdate(id, updatedPass);
        } else if ( key === 'username' || key === 'email') {
            await User.findByIdAndUpdate(id, updatedField);
        }
        return res.status(200).send({ message: `${key} has been updated successfully` });
        } catch(err) {
        console.log(err);
        return res.status(500).send({
            message: err.message,
        });
    }
});

export default router;