// middleware/authMiddleware.js

const { auth } = require('../../firebaseAdmin'); // Import auth from your firebaseAdmin.js

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  auth.verifyIdToken(token)
    .then(decodedToken => {
      req.user = decodedToken;
      next();
    })
    .catch(error => {
      res.status(401).json({ message: 'Unauthorized' });
    });
};

module.exports = { requireAuth };
