const mongoose = require("mongoose");

const commentRatingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const CommentRating = mongoose.model("CommentRating", commentRatingSchema);

module.exports = CommentRating;
