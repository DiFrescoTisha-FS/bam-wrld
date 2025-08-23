// server/firebaseAdmin.js
const admin = require("firebase-admin");

function loadServiceAccount() {
  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_B64 || "";
  const jsonRaw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON || "";

  if (b64) {
    // decode base64 -> JSON string -> object
    const jsonStr = Buffer.from(b64, "base64").toString("utf8");
    return JSON.parse(jsonStr);
  }
  if (jsonRaw) {
    // allow raw JSON as a fallback
    return JSON.parse(jsonRaw);
  }
  throw new Error("No Firebase service account found in env vars.");
}

const svc = loadServiceAccount();

// Normalize the private key in a way that handles all cases:
//  - JSON with literal \n → becomes real newlines
//  - Windows CRLF → LF
//  - Accidental surrounding quotes → stripped
let privateKey = String(svc.private_key || "")
  .replace(/\\n/g, "\n")
  .replace(/\r\n/g, "\n")
  .replace(/^\s*"+|"+\s*$/g, "") // strip accidental wrapping quotes
  .trim();

// Minimal diagnostics (safe): lengths + begin/end checks, not the key itself
if (process.env.NODE_ENV !== "production" || process.env.DEBUG_FIREBASE) {
  const starts = privateKey.startsWith("-----BEGIN PRIVATE KEY-----");
  const ends = privateKey.endsWith("-----END PRIVATE KEY-----") || privateKey.endsWith("-----END PRIVATE KEY-----\n");
  console.log("[firebaseAdmin] keyLen:", privateKey.length, "starts:", starts, "ends:", ends);
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: svc.project_id,
      clientEmail: svc.client_email,
      privateKey,
    }),
    // databaseURL: `https://${svc.project_id}.firebaseio.com`,
    // storageBucket: `${svc.project_id}.appspot.com`,
  });
}

module.exports = { auth: admin.auth(), admin };
