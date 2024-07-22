const express = require("express");
const router = express.Router();
const { requireAuth } = require("../middleware/authMiddleware");
const CommentRating = require("../models/commentRating");

router.post("/comment-rating", requireAuth, async (req, res) => {
  const { userId, comment, rating } = req.body;

  if (!userId || !comment || rating === undefined) {
    console.error('Invalid request data:', req.body);
    return res.status(400).json({ message: 'Invalid request data' });
  }

  try {
    const commentRating = new CommentRating({
      userId,
      comment,
      rating
    });
    await commentRating.save();
    res.status(200).json({ message: 'Comment and rating submitted successfully' });
  } catch (error) {
    console.error('Error saving comment and rating:', error);
    res.status(500).json({ message: 'Failed to submit comment and rating' });
  }
});

module.exports = router;
