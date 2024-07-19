const express = require("express");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const { ClerkExpressWithAuth, ClerkExpressRequireAuth, requireAuth } = require('@clerk/clerk-sdk-node');
const connectDB = require("./api/database/database.js");
const authRoutes = require("./api/routes/authRoutes.js");
const commentRatingRoutes = require("./api/routes/commentRatingRoutes.js");

// Load environment variables from .env.development if not in production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: path.join(__dirname, ".env.development") });
}

const app = express();

console.log("Environment Variables:");
console.log("PORT:", process.env.PORT);
console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);
console.log("CLERK_API_URL:", process.env.CLERK_API_URL);
console.log("JWKS_URL:", process.env.JWKS_URL);
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);
console.log("BACKEND_URL:", process.env.BACKEND_URL);
console.log("CLOUDINARY_NAME:", process.env.CLOUDINARY_NAME);
console.log("CLOUDINARY_KEY:", process.env.CLOUDINARY_KEY);
console.log("CLOUDINARY_SECRET:", process.env.CLOUDINARY_SECRET);
console.log("ALLOWED_ORIGINS:", process.env.ALLOWED_ORIGINS);

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  ClerkExpressWithAuth({
    apiKey: process.env.CLERK_SECRET_KEY,
    apiUrl: process.env.CLERK_API_URL,
    jwtKey: process.env.JWKS_URL,
  })
);

// Use requireAuth for route protection if requireSession is not available
app.get("/", requireAuth(), (req, res) => {
  res.send("Hello, world!");
});

// Routes
app.use("/api", authRoutes);
app.use("/api", commentRatingRoutes);

app.get("/protected-endpoint", ClerkExpressRequireAuth(), (req, res) => {
  res.json(req.auth);
});

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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
