// Ensure these are at the top of your server file
const express = require('express');
const connectDB = require("./api/database/database.js");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const commentRatingRoutes = require("./api/routes/commentRatingRoutes.js");
const userRoutes = require("./api/routes/userRoutes.js");
const CommentRating = require('./api/models/commentRating.js');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: path.join(__dirname, ".env.development") });
}

const app = express();

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS.split(','),
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api/comment-rating', async (req, res) => {
  console.log('Received request at /api/comment-rating with data:', req.body);
  const { userId, comment, rating } = req.body;

  if (!userId || !comment || rating === undefined) {
    console.error('Invalid request data:', req.body);
    return res.status(400).json({ message: 'Invalid request data' });
  }

  try {
    // Assuming you have a CommentRating model set up correctly
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

app.use("/api", commentRatingRoutes);
app.use("/api", userRoutes);

if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "public", "dist");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
