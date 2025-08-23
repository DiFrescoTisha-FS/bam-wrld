const admin = require("firebase-admin");

// Decode from base64 env var into JSON
const svc = JSON.parse(
  Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_B64 || "", "base64").toString("utf8")
);

// Normalize private key newlines
const privateKey = (svc.private_key || "")
  .replace(/\\n/g, "\n")
  .replace(/\r\n/g, "\n")
  .trim();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: svc.project_id,
      clientEmail: svc.client_email,
      privateKey,
    }),
    // optional:
    // databaseURL: `https://${svc.project_id}.firebaseio.com`,
    // storageBucket: `${svc.project_id}.appspot.com`,
  });
}

module.exports = { auth: admin.auth() };
