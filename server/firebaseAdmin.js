// firebaseAdmin.js

const admin = require("firebase-admin");
const serviceAccount = require("./config/firebase-adminsdk.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<YOUR_PROJECT_ID>.firebaseio.com"
  });
}

const auth = admin.auth();

module.exports = { auth };
