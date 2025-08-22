// server/firebaseAdmin.js
const admin = require("firebase-admin");

let serviceAccount;

// Prefer env var (Heroku / production)
if (process.env.FIREBASE_SERVICE_ACCOUNT_B64) {
  const buff = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_B64, "base64");
  serviceAccount = JSON.parse(buff.toString("utf-8"));
} else {
  // Local dev fallback (make sure this file is in .gitignore)
  serviceAccount = require("./config/firebase-adminsdk.json");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // If you use Realtime Database, keep this and ensure project_id is correct:
    // databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
  });
}

const auth = admin.auth();
module.exports = { auth };
