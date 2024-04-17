/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const {setGlobalOptions} = require("firebase-functions/v2");

setGlobalOptions({
    timeoutSeconds: 540,
    memory: "512MiB",
    region: "asia-southeast1"
});

const prodApp = initializeApp(
    {
        projectId: "", // "prod-project-id",
        databaseURL: "" // "https://prod-project-id.firebaseio.com"
    }, "prod-project-id"
);

const devApp = initializeApp(
    {
        projectId: "", // "dev-project-id",
        databaseURL: "" // "https://dev-project-id.firebaseio.com"
    }, "dev-project-id"
);

const prodDb = getFirestore(prodApp);
const devDb = getFirestore(devApp);

const prodLog = logger.log;

module.exports = {prodDb, devDb, prodLog};
