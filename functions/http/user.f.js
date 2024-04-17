const {devDb} = require("../admin")

const {onRequest} = require("firebase-functions/v2/https")
const {getUser} = require("../common/user");

exports.onPost = onRequest(
    {cors: [/firebase\.com$/, "flutter.com"]},
    async (req, res) => {
        try {
            const data = req.body;
            if (!data) {
                res.status(400).send("Invalid request");
                return;
            }

            const {uid} = data;
            const user = await getUser(devDb, uid);
            if (!user) {
                res.status(404).send("User not found");
                return;
            }

            res.status(200).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send(e.toString());
        }
    }
)
