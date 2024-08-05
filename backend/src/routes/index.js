import express from 'express';
import registerRoute from './_register.js';
import loginRoute from './_login.js';
import landingRoute from './_landing.js';
import updateUserRoute from './update.js';
import partialUpdateUserRoute from './partialUpdate.js';
import deleteUserRoute from './deleteUser.js';

const router = express.Router();

router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/', landingRoute);
router.use('/', updateUserRoute);
router.use('/', partialUpdateUserRoute);
router.use('/', deleteUserRoute);

export default router;