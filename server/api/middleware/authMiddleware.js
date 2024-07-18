const express = require("express");
const { clerkClient, ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');
const User = require("../models/user");
const router = express.Router();

router.get("/auth/status", ClerkExpressWithAuth(), async (req, res) => {
  try {
    const { userId } = req.auth;
    if (userId) {
      const user = await clerkClient.users.getUser(userId);
      let dbUser = await User.findOne({ clerkId: user.id });
      if (!dbUser) {
        dbUser = new User({
          clerkId: user.id,
          name: user.fullName || 'Unnamed User',
          picture: user.imageUrl || '',
        });
        await dbUser.save();
      } else {
        dbUser.name = user.fullName || 'Unnamed User';
        dbUser.picture = user.imageUrl || '';
        await dbUser.save();
      }

      res.json({
        isAuthenticated: true,
        user: {
          id: dbUser._id,
          name: dbUser.name,
          avatar: dbUser.picture,
        },
      });
    } else {
      res.json({ isAuthenticated: false });
    }
  } catch (error) {
    console.error("Error in /auth/status route:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

module.exports = router;
