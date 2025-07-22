// backend/user/index.js
import userRouter from '../routes/user.js';
import accountRouter from '../routes/account.js';

import express from 'express'; // Import the express module
const router = express.Router(); // Initialize an Express Router object

router.use('/user', userRouter);
router.use('/account', accountRouter);

export default router;
