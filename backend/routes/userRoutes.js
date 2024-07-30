// routes/userRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controller/userController.js';

const router = express.Router();

// Register a user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

export default router;
