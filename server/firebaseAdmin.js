// server/firebaseAdmin.js
const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

function loadRawCred() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  }
  if (process.env.FIREBASE_SERVICE_ACCOUNT_B64) {
    return Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_B64, "base64").toString("utf8");
  }
  // local fallback file
  return fs.readFileSync(path.join(__dirname, "config", "firebase-adminsdk.json"), "utf8");
}

const raw = loadRawCred();
const svc = JSON.parse(raw);

// 🔧 normalize private key: handle \n vs real newlines and trim stray quotes
const privateKey = (svc.private_key || "")
  .replace(/\\n/g, "\n")       // turn literal \n into real newlines
  .replace(/\r\n/g, "\n")      // normalize CRLF
  .trim();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: svc.project_id,
      clientEmail: svc.client_email,
      privateKey,               // use normalized key
    }),
    // If you use Realtime DB, uncomment:
    // databaseURL: `https://${svc.project_id}.firebaseio.com`,
  });
}

module.exports = { auth: admin.auth() };
