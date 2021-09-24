const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const totp = require("totp-generator");
const { v4: uuid } = require('uuid');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/signup', (req, res) => {
    const userId = generateUserId();
    const sharedSecret = userId.split("-")[4];
    res.send(JSON.stringify({userId, sharedSecret}));
});

app.get('/validate', (req, res) => {
    const userId = req.body.userId;
    const token = req.body.token;
    res.send(verify(userId, token));
});

app.get("/ping", (req, res) => {
    res.send({ msg: "Backend is connected" });
});

function verify(userId, userTotp) {
    const totpChallenge = totp(userId.split("-")[4], {
        digits: 8,
        period: 60,
    });

    return totpChallenge === userTotp;
}

function generateUserId() {
    return uuid();
}