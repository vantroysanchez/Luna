import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/users', userController.getAllUser);
router.get('/users/:id', userController.getUserById);

export default router;