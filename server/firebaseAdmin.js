// server/firebaseAdmin.js
const admin = require("firebase-admin");

function loadSvc() {
  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_B64 || "";
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON || "";
  if (b64) return JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
  if (raw) return JSON.parse(raw);
  throw new Error("No Firebase service account found in env vars.");
}

const svc = loadSvc();

// Normalize + sanitize key
let privateKey = String(svc.private_key || "")
  // handle escaped \n inside JSON
  .replace(/\\n/g, "\n")
  // normalize CRLF → LF
  .replace(/\r\n/g, "\n")
  // strip accidental wrapping quotes
  .replace(/^\s*"+|"+\s*$/g, "")
  // strip any non-printable chars that can sneak in
  .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "")
  // ensure exactly one trailing newline (PEM parsers are picky sometimes)
  .replace(/\n*$/g, "\n")
  .trimEnd() + "\n";

// Safe diagnostics (no secrets):
if (process.env.DEBUG_FIREBASE) {
  const starts = privateKey.startsWith("-----BEGIN PRIVATE KEY-----");
  const ends = privateKey.endsWith("-----END PRIVATE KEY-----\n");
  console.log("[firebaseAdmin] keyLen:", privateKey.length, "starts:", starts, "ends:", ends);
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: svc.project_id,
      clientEmail: svc.client_email,
      privateKey,
    }),
  });
}

module.exports = { auth: admin.auth(), admin };
