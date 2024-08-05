import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';

const router = express.Router();

//Route for updating all of user details on db based on their id (Extra route)
router.put('/:id', async (req, res) => {
    try{
        if(!req.params.id) {
            return res.status(400).json({
                message: 'Please include all required fields in the url: id'
            });
        };
        if(!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).send({
                message: 'Please attach all required fields: username, email and password'
            })
        }
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        const hash = await bcrypt.hash(req.body.password, 10);
        const newUser = {
            username: req.body.username,
            email: req.body.email,
            password: hash
        }
        await User.findByIdAndUpdate(id, newUser);
        return res.status(200).send({ message: 'User has updated successfully!' })
    }catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err.message,
        });
    }
});

export default router;