import express from 'express';
import { signup, login, logout, getMe } from './authController.js';
import pool from './db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Protect Route Middleware
const protect = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Not logged in" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const result = await pool.query("SELECT id, name, email, role FROM users WHERE id = $1", [decoded.id]);
    req.user = result.rows[0];
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, getMe);

export default router;