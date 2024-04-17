const {devDb} = require("../admin");

const {onDocumentWritten, onDocumentCreated, onDocumentUpdated, onDocumentDeleted} = require("firebase-functions/v2/firestore");

// onWrite event for users
exports.onWrite = onDocumentWritten("users/{userId}", async (event) => {
    try {
        const {userId} = event.params
        const data = event.data.after.data()
        const oldData = event.data.before.data()
        const userRef = devDb.collection("users").doc(userId)
        console.log(`User ${userId} was updated`)
        console.log("User ref: ", userRef)
        console.log("Old data: ", oldData)
        console.log("New data: ", data)

        // Add your logic here


    } catch (e) {
        console.log(e);
    }
});

// onCreate event for users
exports.onCreate = onDocumentCreated("users/{userId}", async (event) => {
    try {
        const {userId} = event.params
        const data = event.data.data()

        console.log(`User ${userId} was created`)
        console.log("Data: ", data)

        // Add your logic here


    } catch (e) {
        console.log(e);
    }
});

// onUpdate event for users
exports.onUpdate = onDocumentUpdated("users/{userId}", async (event) => {
    try {
        const {userId} = event.params
        const data = event.data.after.data()
        const oldData = event.data.before.data()

        console.log(`User ${userId} was updated`)
        console.log("Old data: ", oldData)
        console.log("New data: ", data)

        // Add your logic here


    } catch (e) {
        console.log(e);
    }
});

// onDelete event for users
exports.onDelete = onDocumentDeleted("users/{userId}", async (event) => {
    try {
        const {userId} = event.params
        const data = event.data.data()

        console.log(`User ${userId} was deleted`)
        console.log("Data: ", data)

        // Add your logic here


    } catch (e) {
        console.log(e);
    }
});
