const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  accessToken: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
  expiration: {
    type: Date,
  },
});

module.exports = mongoose.models.Token || mongoose.model('Token', tokenSchema);
