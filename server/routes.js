const express = require('express');
const passport = require('./api/auth/auth'); // Corrected path
const CommentRating = require('./api/models/commentRating');
const router = express.Router();

// Authentication check status
router.get('/auth/status', (req, res) => {
    if (req.isAuthenticated()) {
      res.json({
        isAuthenticated: true,
        user: {
          id: req.user._id,
          name: req.user.name,
          avatar: req.user.picture,
        },
      });
    } else {
      res.json({ isAuthenticated: false });
    }
});
  
// Google OAuth routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect(process.env.FRONTEND_URL);
});

router.get('/auth/logout', (req, res, next) => {
    console.log('Logout endpoint hit');
    req.logout((err) => {
        if (err) {
            console.log('Error during logout:', err);
            return next(err);
        }
        req.session.destroy((err) => {
            if (err) {
                console.log('Error destroying session:', err);
                return next(err);
            }
            res.clearCookie('connect.sid', { path: '/' });
            console.log('Session destroyed, redirecting to frontend');
            res.redirect(process.env.FRONTEND_URL);
        });
    });
});

router.post('/comment-rating', async (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send('You must be logged in to leave a comment and/or rating');
    }

    try {
        const newCommentRating = new CommentRating({
            user: req.user._id,
            comment: req.body.comment,
            rating: req.body.rating,
        });

        const savedCommentRating = await newCommentRating.save();
        res.status(201).json(savedCommentRating);
    } catch (error) {
        console.error('Error saving comment and rating:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error });
    }
});

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        error: err.message || 'Internal Server Error',
    });
});

module.exports = router;
