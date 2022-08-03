const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");

const axios = require("axios");

admin.initializeApp();

exports.scheduledFunction = functions.pubsub
  .schedule("every 5 minutes")
  .onRun((context) => {
    return axios.default
      .post("https://api.wiseoldman.net/players/track", {
        username: "im mgp",
      })
      .then((res) => {
        console.log(`statusCode: ${res.status}`);
      })
      .catch((error) => {
        console.error(error);
      });
  });
