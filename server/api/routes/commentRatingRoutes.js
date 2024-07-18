const express = require("express");
const CommentRating = require("../models/commentRating");
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');
const router = express.Router();

// Add comment and rating
router.post("/comment-rating", ClerkExpressRequireAuth(), async (req, res) => {
  console.log("req.auth:", req.auth); // Debugging log
  const { userId } = req.auth;
  const { comment, rating } = req.body;
  try {
    if (!userId) {
      console.log("User ID is missing");
      return res.status(400).json({ message: "User ID is required" });
    }
    const newCommentRating = new CommentRating({
      user: userId,
      comment,
      rating,
    });
    const savedCommentRating = await newCommentRating.save();
    console.log("Comment and rating saved:", savedCommentRating);
    res.status(201).json(savedCommentRating);
  } catch (error) {
    console.error("Error saving comment and rating:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

module.exports = router;
