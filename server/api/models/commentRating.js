const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentRatingSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
});

const CommentRating = mongoose.model('CommentRating', commentRatingSchema);

module.exports = CommentRating;
