const express = require('express');
const User = require('../models/user');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const router = express.Router();

router.get('/users', ClerkExpressWithAuth(), async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get('/user/:id', ClerkExpressWithAuth(), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

module.exports = router;
