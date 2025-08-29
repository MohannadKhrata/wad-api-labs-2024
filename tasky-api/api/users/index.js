

import express from 'express';
import User from './userModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// register(Create)/Authenticate User
router.post('/', asyncHandler(async (req, res) => {
  if (req.query.action === 'register') {
    await User(req.body).save();
    return res.status(201).json({
      code: 201,
      msg: 'Successful created new user.',
    });
  } else {
    const user = await User.findOne(req.body);
    if (!user) {
      return res.status(401).json({ code: 401, msg: 'Authentication failed' });
    }
    return res.status(200).json({ code: 200, msg: 'Authentication Successful', token: 'TEMPORARY_TOKEN' });
  }
}));

export default router;
