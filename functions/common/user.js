
const getUser = async (db, id) => {
    try {
        const userRef = db.collection("users").doc(id);
        const userDoc = await userRef.get();
        if (!userDoc.exists) {
            return null;
        }
        return userDoc.data();
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getUser
}
