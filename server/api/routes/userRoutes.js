const express = require("express");
const User = require("../models/user"); // Import your User model
const router = express.Router();

router.post("/save-user", async (req, res) => {
  const { uid, displayName, email, photoURL } = req.body;

  try {
    let user = await User.findOne({ uid });

    if (!user) {
      user = new User({
        uid,
        displayName,
        email,
        photoURL
      });
      await user.save();
    } else {
      // Update existing user if needed
      user.displayName = displayName;
      user.email = email;
      user.photoURL = photoURL;
      await user.save();
    }

    res.status(200).json({ message: "User saved successfully", user });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
