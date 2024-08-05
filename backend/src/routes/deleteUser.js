import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

//Route for deleting a user from db based on their id (Unnecessary route)
router.delete('/:id', async (req, res) => {
    try{
        if(!req.params.id) {
            return res.status(400).json({
                message: 'Please include all required fields in the url: id'
            });
        };
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        return res.status(200).send({ message: 'User has been deleted successfully!' });
    }catch (err) {
        console.log(err);
        return res.status(500).send({ 
            message: err.message,
        })
    }
});

export default router;